import os
import sys
import time
import random
import threading
import webbrowser
import keyboard
import pyautogui
import win32api
import win32con
import json
from PIL import ImageGrab, Image, ImageDraw, ImageFont
import numpy as np
import tkinter as tk
from tkinter import ttk, messagebox, filedialog, colorchooser
import pygetwindow as gw
import ctypes
import psutil
from screeninfo import get_monitors
import pyperclip
import cv2
import win32gui
import win32process
import pymem
import re
import subprocess
import math
import struct
import hashlib
import zlib
import binascii
from datetime import datetime

# Constants
GAME_PROCESS_NAME = "Dynastio.exe"
GAME_WINDOW_TITLE = "Dynast.io"
DLL_NAME = "DeltaCheat.dll"
INJECTOR_NAME = "DeltaInjector.exe"

class AdvancedInjector:
    def __init__(self):
        self.injection_methods = [
            self.standard_injection,
            self.thread_hijacking,
            self.manual_map,
            self.advanced_manual_map
        ]
        self.current_method = 0
        self.stealth_mode = True
        self.cleanup_handles = True
        self.use_obfuscation = True
        self.error_count = 0
        self.max_retries = 3
        
    def obfuscate_string(self, s):
        """Obfuscate strings to avoid detection"""
        return binascii.hexlify(s.encode()).decode()
    
    def generate_random_name(self):
        """Generate random DLL name"""
        prefixes = ["dxgi", "d3d11", "dinput8", "winmm", "msvcrt"]
        return f"{random.choice(prefixes)}_{random.randint(1000, 9999)}.dll"
    
    def get_process_id(self, process_name):
        """Get process ID by name with multiple methods"""
        methods = [
            self._get_pid_psutil,
            self._get_pid_win32,
            self._get_pid_wmi
        ]
        
        for method in methods:
            try:
                pid = method(process_name)
                if pid:
                    return pid
            except:
                continue
        return None
    
    def _get_pid_psutil(self, process_name):
        """Get PID using psutil"""
        for proc in psutil.process_iter(['pid', 'name']):
            if proc.info['name'].lower() == process_name.lower():
                return proc.info['pid']
        return None
    
    def _get_pid_win32(self, process_name):
        """Get PID using win32"""
        PROCESS_ALL_ACCESS = 0x1F0FFF
        snapshot = win32api.CreateToolhelp32Snapshot(win32con.TH32CS_SNAPPROCESS, 0)
        
        try:
            process_entry = win32process.ProcessEntry32()
            process_entry.dwSize = ctypes.sizeof(process_entry)
            
            if win32process.Process32First(snapshot, ctypes.byref(process_entry)):
                while True:
                    if process_entry.szExeFile.decode().lower() == process_name.lower():
                        return process_entry.th32ProcessID
                    
                    if not win32process.Process32Next(snapshot, ctypes.byref(process_entry)):
                        break
        finally:
            win32api.CloseHandle(snapshot)
        
        return None
    
    def _get_pid_wmi(self, process_name):
        """Get PID using WMI"""
        try:
            import wmi
            c = wmi.WMI()
            for process in c.Win32_Process():
                if process.Name.lower() == process_name.lower():
                    return process.ProcessId
        except:
            return None
    
    def inject(self, pid, dll_path, method=None):
        """Main injection method with multiple techniques"""
        if not os.path.exists(dll_path):
            raise FileNotFoundError(f"DLL file not found: {dll_path}")
            
        if not pid:
            raise ValueError("Invalid process ID")
            
        # Try different injection methods
        methods_to_try = [method] if method else self.injection_methods
        
        for injection_method in methods_to_try:
            try:
                result = injection_method(pid, dll_path)
                if result:
                    return True
            except Exception as e:
                self.error_count += 1
                if self.error_count >= self.max_retries:
                    raise RuntimeError(f"Failed to inject after {self.max_retries} attempts")
                continue
                
        return False
    
    def standard_injection(self, pid, dll_path):
        """Standard CreateRemoteThread injection"""
        kernel32 = ctypes.windll.kernel32
        
        # Open process
        process_handle = kernel32.OpenProcess(
            win32con.PROCESS_CREATE_THREAD | win32con.PROCESS_QUERY_INFORMATION |
            win32con.PROCESS_VM_OPERATION | win32con.PROCESS_VM_WRITE | win32con.PROCESS_VM_READ,
            False, pid)
            
        if not process_handle:
            raise RuntimeError(f"Could not open process {pid}")
            
        try:
            # Allocate memory for DLL path
            dll_path_encoded = dll_path.encode('utf-8')
            remote_memory = kernel32.VirtualAllocEx(
                process_handle, None, len(dll_path_encoded) + 1,
                win32con.MEM_COMMIT, win32con.PAGE_READWRITE)
                
            if not remote_memory:
                raise RuntimeError("Could not allocate memory in target process")
                
            # Write DLL path to remote process
            written = ctypes.c_ulong(0)
            kernel32.WriteProcessMemory(
                process_handle, remote_memory, dll_path_encoded,
                len(dll_path_encoded) + 1, ctypes.byref(written))
                
            if written.value != len(dll_path_encoded) + 1:
                raise RuntimeError("Failed to write DLL path to target process")
                
            # Get LoadLibraryA address
            load_library = kernel32.GetProcAddress(
                kernel32.GetModuleHandleA(b"kernel32.dll"), b"LoadLibraryA")
                
            if not load_library:
                raise RuntimeError("Could not get LoadLibraryA address")
                
            # Create remote thread
            thread_id = ctypes.c_ulong(0)
            thread_handle = kernel32.CreateRemoteThread(
                process_handle, None, 0, load_library, remote_memory, 0,
                ctypes.byref(thread_id))
                
            if not thread_handle:
                raise RuntimeError("Could not create remote thread")
                
            # Wait for thread to finish
            kernel32.WaitForSingleObject(thread_handle, win32con.INFINITE)
            
            # Clean up
            if self.cleanup_handles:
                kernel32.VirtualFreeEx(process_handle, remote_memory, 0, win32con.MEM_RELEASE)
                kernel32.CloseHandle(thread_handle)
                
            return True
        finally:
            kernel32.CloseHandle(process_handle)
    
    def thread_hijacking(self, pid, dll_path):
        """Thread hijacking injection technique"""
        kernel32 = ctypes.windll.kernel32
        ntdll = ctypes.windll.ntdll
        
        # Open process
        process_handle = kernel32.OpenProcess(
            win32con.PROCESS_CREATE_THREAD | win32con.PROCESS_QUERY_INFORMATION |
            win32con.PROCESS_VM_OPERATION | win32con.PROCESS_VM_WRITE | win32con.PROCESS_VM_READ,
            False, pid)
            
        if not process_handle:
            raise RuntimeError(f"Could not open process {pid}")
            
        try:
            # Allocate memory for DLL path
            dll_path_encoded = dll_path.encode('utf-8')
            remote_memory = kernel32.VirtualAllocEx(
                process_handle, None, len(dll_path_encoded) + 1,
                win32con.MEM_COMMIT, win32con.PAGE_READWRITE)
                
            if not remote_memory:
                raise RuntimeError("Could not allocate memory in target process")
                
            # Write DLL path to remote process
            written = ctypes.c_ulong(0)
            kernel32.WriteProcessMemory(
                process_handle, remote_memory, dll_path_encoded,
                len(dll_path_encoded) + 1, ctypes.byref(written))
                
            if written.value != len(dll_path_encoded) + 1:
                raise RuntimeError("Failed to write DLL path to target process")
                
            # Get LoadLibraryA address
            load_library = kernel32.GetProcAddress(
                kernel32.GetModuleHandleA(b"kernel32.dll"), b"LoadLibraryA")
                
            if not load_library:
                raise RuntimeError("Could not get LoadLibraryA address")
                
            # Find a thread to hijack
            THREAD_ALL_ACCESS = 0x1F03FF
            snapshot = kernel32.CreateToolhelp32Snapshot(win32con.TH32CS_SNAPTHREAD, 0)
            
            if snapshot == win32con.INVALID_HANDLE_VALUE:
                raise RuntimeError("Could not create thread snapshot")
                
            try:
                thread_entry = win32process.ThreadEntry32()
                thread_entry.dwSize = ctypes.sizeof(thread_entry)
                
                if kernel32.Thread32First(snapshot, ctypes.byref(thread_entry)):
                    while True:
                        if thread_entry.th32OwnerProcessID == pid:
                            thread_handle = kernel32.OpenThread(
                                THREAD_ALL_ACCESS, False, thread_entry.th32ThreadID)
                                
                            if thread_handle:
                                # Suspend the thread
                                suspend_count = ntdll.NtSuspendThread(thread_handle, None)
                                
                                if suspend_count >= 0:
                                    # Get thread context
                                    context = win32process.GetThreadContext(thread_handle)
                                    
                                    # Backup original context
                                    original_context = context
                                    
                                    # Modify context to point to our code
                                    context.Eip = load_library
                                    context.Esp -= 4
                                    
                                    # Write argument to stack
                                    argument = remote_memory
                                    written = ctypes.c_ulong(0)
                                    kernel32.WriteProcessMemory(
                                        process_handle, context.Esp,
                                        ctypes.byref(ctypes.c_void_p(argument)),
                                        4, ctypes.byref(written))
                                        
                                    if written.value != 4:
                                        ntdll.NtResumeThread(thread_handle, None)
                                        kernel32.CloseHandle(thread_handle)
                                        continue
                                        
                                    # Set new context
                                    win32process.SetThreadContext(thread_handle, context)
                                    
                                    # Resume thread
                                    ntdll.NtResumeThread(thread_handle, None)
                                    
                                    # Wait for injection to complete
                                    time.sleep(0.5)
                                    
                                    # Restore original context
                                    win32process.SetThreadContext(thread_handle, original_context)
                                    
                                    # Clean up
                                    if self.cleanup_handles:
                                        kernel32.VirtualFreeEx(process_handle, remote_memory, 0, win32con.MEM_RELEASE)
                                        kernel32.CloseHandle(thread_handle)
                                        
                                    return True
                                    
                                kernel32.CloseHandle(thread_handle)
                                
                        if not kernel32.Thread32Next(snapshot, ctypes.byref(thread_entry)):
                            break
            finally:
                kernel32.CloseHandle(snapshot)
                
            raise RuntimeError("No suitable thread found for hijacking")
        finally:
            kernel32.CloseHandle(process_handle)
    
    def manual_map(self, pid, dll_path):
        """Manual mapping injection technique"""
        kernel32 = ctypes.windll.kernel32
        ntdll = ctypes.windll.ntdll
        
        # Open process
        process_handle = kernel32.OpenProcess(
            win32con.PROCESS_CREATE_THREAD | win32con.PROCESS_QUERY_INFORMATION |
            win32con.PROCESS_VM_OPERATION | win32con.PROCESS_VM_WRITE | win32con.PROCESS_VM_READ,
            False, pid)
            
        if not process_handle:
            raise RuntimeError(f"Could not open process {pid}")
            
        try:
            # Read DLL file
            with open(dll_path, 'rb') as f:
                dll_data = f.read()
                
            # Allocate memory for DLL
            remote_memory = kernel32.VirtualAllocEx(
                process_handle, None, len(dll_data),
                win32con.MEM_COMMIT | win32con.MEM_RESERVE, win32con.PAGE_EXECUTE_READWRITE)
                
            if not remote_memory:
                raise RuntimeError("Could not allocate memory in target process")
                
            # Write DLL to remote process
            written = ctypes.c_ulong(0)
            kernel32.WriteProcessMemory(
                process_handle, remote_memory, dll_data,
                len(dll_data), ctypes.byref(written))
                
            if written.value != len(dll_data):
                raise RuntimeError("Failed to write DLL to target process")
                
            # Get address of LoadLibraryA
            load_library = kernel32.GetProcAddress(
                kernel32.GetModuleHandleA(b"kernel32.dll"), b"LoadLibraryA")
                
            if not load_library:
                raise RuntimeError("Could not get LoadLibraryA address")
                
            # Create remote thread to execute the DLL
            thread_id = ctypes.c_ulong(0)
            thread_handle = kernel32.CreateRemoteThread(
                process_handle, None, 0, load_library, remote_memory, 0,
                ctypes.byref(thread_id))
                
            if not thread_handle:
                raise RuntimeError("Could not create remote thread")
                
            # Wait for thread to finish
            kernel32.WaitForSingleObject(thread_handle, win32con.INFINITE)
            
            # Clean up
            if self.cleanup_handles:
                kernel32.VirtualFreeEx(process_handle, remote_memory, 0, win32con.MEM_RELEASE)
                kernel32.CloseHandle(thread_handle)
                
            return True
        finally:
            kernel32.CloseHandle(process_handle)
    
    def advanced_manual_map(self, pid, dll_path):
        """Advanced manual mapping with more stealth"""
        kernel32 = ctypes.windll.kernel32
        ntdll = ctypes.windll.ntdll
        
        # Open process with minimal permissions
        process_handle = kernel32.OpenProcess(
            win32con.PROCESS_CREATE_THREAD | win32con.PROCESS_QUERY_LIMITED_INFORMATION |
            win32con.PROCESS_VM_OPERATION | win32con.PROCESS_VM_WRITE | win32con.PROCESS_VM_READ,
            False, pid)
            
        if not process_handle:
            raise RuntimeError(f"Could not open process {pid}")
            
        try:
            # Read DLL file
            with open(dll_path, 'rb') as f:
                dll_data = f.read()
                
            # Obfuscate DLL data
            if self.use_obfuscation:
                dll_data = self.obfuscate_dll(dll_data)
                
            # Allocate memory for DLL in random location
            remote_memory = None
            for _ in range(10):  # Try 10 times to allocate at random address
                try:
                    desired_address = random.randint(0x10000000, 0x70000000)
                    remote_memory = kernel32.VirtualAllocEx(
                        process_handle, desired_address, len(dll_data),
                        win32con.MEM_COMMIT | win32con.MEM_RESERVE, 
                        win32con.PAGE_EXECUTE_READWRITE)
                        
                    if remote_memory:
                        break
                except:
                    continue
                    
            if not remote_memory:
                remote_memory = kernel32.VirtualAllocEx(
                    process_handle, None, len(dll_data),
                    win32con.MEM_COMMIT | win32con.MEM_RESERVE, 
                    win32con.PAGE_EXECUTE_READWRITE)
                    
                if not remote_memory:
                    raise RuntimeError("Could not allocate memory in target process")
                    
            # Write DLL to remote process in chunks with random delays
            chunk_size = 4096
            for i in range(0, len(dll_data), chunk_size):
                chunk = dll_data[i:i+chunk_size]
                written = ctypes.c_ulong(0)
                kernel32.WriteProcessMemory(
                    process_handle, remote_memory + i, chunk,
                    len(chunk), ctypes.byref(written))
                    
                if written.value != len(chunk):
                    raise RuntimeError("Failed to write DLL chunk to target process")
                    
                if self.stealth_mode:
                    time.sleep(random.uniform(0.01, 0.1))
                    
            # Create thread in suspended state
            thread_id = ctypes.c_ulong(0)
            thread_handle = kernel32.CreateRemoteThread(
                process_handle, None, 0, remote_memory, None,
                win32con.CREATE_SUSPENDED, ctypes.byref(thread_id))
                
            if not thread_handle:
                raise RuntimeError("Could not create remote thread")
                
            # Queue APC to call our code
            ntdll.NtQueueApcThread(thread_handle, remote_memory, 0, 0, 0)
            
            # Resume thread
            ntdll.NtResumeThread(thread_handle, None)
            
            # Wait for thread to finish
            kernel32.WaitForSingleObject(thread_handle, win32con.INFINITE)
            
            # Clean up
            if self.cleanup_handles:
                kernel32.VirtualFreeEx(process_handle, remote_memory, 0, win32con.MEM_RELEASE)
                kernel32.CloseHandle(thread_handle)
                
            return True
        finally:
            kernel32.CloseHandle(process_handle)
    
    def obfuscate_dll(self, dll_data):
        """Simple XOR obfuscation for DLL data"""
        key = random.randint(1, 255)
        return bytes([b ^ key for b in dll_data])

class DynastioCheat:
    def __init__(self):
        self.running = True
        self.injector = AdvancedInjector()
        self.game_process_name = "dynast.io"
        self.exe_process_name = "Dynastio.exe"
        self.game_window = None
        self.game_handle = None
        self.game_pid = None
        self.pm = None
        self.game_base_address = None
        self.anti_cheat_bypass_active = True
        self.last_activity_time = time.time()
        self.overlay = None
        self.overlay_thread = None
        self.chat_spam_text = "Delta Cheat ON"
        self.chat_spam_active = False
        self.chat_spam_delay = 5.0
        self.auto_e_active = False
        self.auto_e_delay = 10.0
        self.fps = 60
        self.cps = 10
        self.ping = 50
        self.esp_arrows = True
        self.esp_distance = 30
        self.aimbot_active = False
        self.zoom_active = False
        self.zoom_scale = 1.0
        self.block_flipper_active = False
        self.language = "english"
        self.player_positions = []
        self.resource_positions = []
        self.injected = False
        self.game_path = os.path.join(os.path.expanduser("~"), "Desktop", "Dynastio.exe")
        self.target_strafe_active = False
        self.phase_through_walls_active = False
        self.auto_leave_active = False
        self.last_leave_time = 0
        self.strafe_angle = 0
        self.esp_active = False
        self.overlay_visible = False
        self.hidden = False
        self.injector_ui = None
        self.god_mode_active = False
        self.active_features = []
        self.custom_colors = {
            'player': [255, 50, 50],
            'resource': [50, 255, 50],
            'text': [255, 255, 255],
            'background': [0, 0, 0, 150]
        }
        
        # Settings
        self.settings = {
            'aimbot': {'active': False, 'fov': 100, 'smoothness': 3.0, 'target_color': [255, 50, 50], 'strength': 5.0, 'bind': 'alt'},
            'auto_attack': {'active': False, 'delay': 0.1, 'distance': 200, 'bind': 'ctrl'},
            'auto_build': {'active': False, 'templates': ["wall", "tower"], 'delay': 0.2, 'bind': 'f2'},
            'block_flipper': {'active': False, 'delay': 0.5, 'angle': 90, 'bind': 'f3'},
            'speed_boost': {'active': False, 'speed': 1.5, 'bind': 'shift'},
            'zoom': {'active': False, 'scale': 2.0, 'bind': 'f5'},
            'esp': {'active': False, 'player_color': [255, 50, 50], 'resource_color': [50, 255, 50], 'bind': 'f4'},
            'stats': {'active': True, 'show_fps': True, 'show_cps': True, 'show_ping': True},
            'anti_cheat_bypass': {'active': True, 'mode': 'silent', 'advanced': True},
            'chat_spam': {'active': False, 'text': "Delta Cheat ON", 'delay': 5.0, 'bind': 'f7'},
            'auto_e': {'active': False, 'delay': 10.0, 'bind': 'f8', 'range': 150},
            'target_strafe': {'active': False, 'radius': 10, 'speed': 1.0, 'bind': 'f9'},
            'phase_through_walls': {'active': False, 'bind': 'f10'},
            'auto_leave': {'active': False, 'health_threshold': 30, 'bind': 'f11'},
            'god_mode': {'active': False, 'bind': 'f12'}
        }
        
        # Translations
        self.translations = {
            'english': {
                'window_title': "Delta Cheat for Dynast.io",
                'menu_combat': "Combat",
                'menu_build': "Building",
                'menu_visual': "Visual",
                'menu_movement': "Movement",
                'menu_system': "System",
                'status_ready': "Ready",
                'cheat_started': "Delta Cheat for Dynast.io successfully started",
                'hide_show': "Press F1 to hide/show menu",
                'aimbot_settings': "Aimbot Settings",
                'enable_aimbot': "Enable Aimbot",
                'bind': "Bind:",
                'save': "Save",
                'fov': "Field of View:",
                'smoothness': "Smoothness:",
                'auto_attack': "Auto Attack",
                'enable_auto_attack': "Enable Auto Attack",
                'auto_build': "Auto Build",
                'enable_auto_build': "Enable Auto Build",
                'templates': "Templates:",
                'block_flipper': "Block Flipper",
                'enable_block_flipper': "Enable Block Flipper",
                'flip_angle': "Flip Angle:",
                'esp_settings': "ESP Settings",
                'enable_esp': "Enable ESP",
                'player_color': "Player Color:",
                'resource_color': "Resource Color:",
                'show_arrows': "Show Player Arrows",
                'distance': "Distance:",
                'zoom_settings': "Zoom Settings",
                'enable_zoom': "Enable Zoom",
                'scale': "Scale:",
                'speed_boost': "Speed Boost",
                'enable_speed': "Enable Speed Boost",
                'speed_mult': "Speed Multiplier:",
                'anti_cheat': "Anti-Cheat Bypass",
                'enable_anti_cheat': "Enable Anti-Cheat Bypass",
                'mode': "Mode:",
                'advanced': "Advanced Bypass",
                'chat_spam': "Chat Spam",
                'enable_spam': "Enable Chat Spam",
                'text': "Text:",
                'delay': "Delay (sec):",
                'auto_e': "Auto E (Resource Collection)",
                'enable_auto_e': "Enable Auto E",
                'range': "Range:",
                'target_strafe': "Target Strafe",
                'enable_target_strafe': "Enable Target Strafe",
                'radius': "Radius:",
                'phase_through_walls': "Phase Through Walls",
                'enable_phase': "Enable Phase Through Walls",
                'auto_leave': "Auto Leave",
                'enable_auto_leave': "Enable Auto Leave",
                'health_threshold': "Health Threshold:",
                'launch_game': "Launch Game",
                'launch_browser': "Launch in Browser",
                'find_exe': "Find .exe Process",
                'exit_confirm': "Exit Confirmation",
                'exit_message': "Are you sure you want to exit?",
                'yes': "Yes",
                'no': "No",
                'color_picker': "Choose Color",
                'language': "Language:",
                'stats_settings': "Stats Settings",
                'enable_stats': "Enable Stats",
                'show_fps': "Show FPS",
                'show_cps': "Show CPS",
                'show_ping': "Show PING",
                'inject': "Inject Cheat",
                'inject_status': "Injection Status: Not Injected",
                'select_exe': "Select Game EXE",
                'injector_title': "Delta Injector",
                'injector_status': "Status: Ready",
                'injector_method': "Injection Method:",
                'injector_stealth': "Stealth Mode:",
                'injector_cleanup': "Cleanup Handles:",
                'injector_obfuscate': "Obfuscate DLL:",
                'injector_start': "Start Injection",
                'injector_game_path': "Game Path:",
                'injector_browse': "Browse",
                'injector_launch_game': "Launch Game",
                'injector_success': "Injection successful!",
                'injector_failed': "Injection failed!",
                'injector_running': "Game is running, attaching...",
                'injector_launching': "Launching game...",
                'god_mode': "God Mode",
                'enable_god_mode': "Enable God Mode",
                'visual_settings': "Visual Settings",
                'text_color': "Text Color:",
                'background_color': "Background Color:",
                'active_features': "Active Features:"
            },
            'russian': {
                'window_title': "Delta Чит для Dynast.io",
                'menu_combat': "Бой",
                'menu_build': "Строительство",
                'menu_visual': "Визуал",
                'menu_movement': "Передвижение",
                'menu_system': "Система",
                'status_ready': "Готов",
                'cheat_started': "Delta Чит для Dynast.io успешно запущен",
                'hide_show': "Нажмите F1 для скрытия/показа меню",
                'aimbot_settings': "Настройки аимбота",
                'enable_aimbot': "Включить аимбот",
                'bind': "Клавиша:",
                'save': "Сохранить",
                'fov': "Поле зрения:",
                'smoothness': "Плавность:",
                'auto_attack': "Авто атака",
                'enable_auto_attack': "Включить авто атаку",
                'auto_build': "Авто стройка",
                'enable_auto_build': "Включить авто стройку",
                'templates': "Шаблоны:",
                'block_flipper': "Переворот блоков",
                'enable_block_flipper': "Включить переворот блоков",
                'flip_angle': "Угол поворота:",
                'esp_settings': "Настройки ESP",
                'enable_esp': "Включить ESP",
                'player_color': "Цвет игроков:",
                'resource_color': "Цвет ресурсов:",
                'show_arrows': "Показывать стрелки к игрокам",
                'distance': "Дистанция:",
                'zoom_settings': "Настройки зума",
                'enable_zoom': "Включить зум",
                'scale': "Масштаб:",
                'speed_boost': "Ускорение",
                'enable_speed': "Включить ускорение",
                'speed_mult': "Множитель скорости:",
                'anti_cheat': "Обход античита",
                'enable_anti_cheat': "Включить обход античита",
                'mode': "Режим:",
                'advanced': "Продвинутый обход",
                'chat_spam': "Спам чата",
                'enable_spam': "Включить спам чата",
                'text': "Текст:",
                'delay': "Задержка (сек):",
                'auto_e': "Авто E (сбор ресурсов)",
                'enable_auto_e': "Включить авто E",
                'range': "Дистанция:",
                'target_strafe': "Кружение вокруг цели",
                'enable_target_strafe': "Включить кружение",
                'radius': "Радиус:",
                'phase_through_walls': "Прохождение сквозь стены",
                'enable_phase': "Включить прохождение",
                'auto_leave': "Авто выход",
                'enable_auto_leave': "Включить авто выход",
                'health_threshold': "Порог здоровья:",
                'launch_game': "Запуск игры",
                'launch_browser': "Запустить в браузере",
                'find_exe': "Найти .exе процесс",
                'exit_confirm': "Выход",
                'exit_message': "Вы уверены, что хотите выйти?",
                'yes': "Да",
                'no': "Нет",
                'color_picker': "Выбор цвета",
                'language': "Язык:",
                'stats_settings': "Настройки статистики",
                'enable_stats': "Включить статистику",
                'show_fps': "Показывать FPS",
                'show_cps': "Показывать CPS",
                'show_ping': "Показывать PING",
                'inject': "Внедрить чит",
                'inject_status': "Статус внедрения: Не внедрено",
                'select_exe': "Выбрать EXE игры",
                'injector_title': "Delta Инжектор",
                'injector_status': "Статус: Готов",
                'injector_method': "Метод инъекции:",
                'injector_stealth': "Скрытный режим:",
                'injector_cleanup': "Очистка дескрипторов:",
                'injector_obfuscate': "Обфускация DLL:",
                'injector_start': "Начать инъекцию",
                'injector_game_path': "Путь к игре:",
                'injector_browse': "Обзор",
                'injector_launch_game': "Запустить игру",
                'injector_success': "Инъекция успешна!",
                'injector_failed': "Инъекция не удалась!",
                'injector_running': "Игра запущена, подключение...",
                'injector_launching': "Запуск игры...",
                'god_mode': "Режим Бога",
                'enable_god_mode': "Включить режим бога",
                'visual_settings': "Настройки визуала",
                'text_color': "Цвет текста:",
                'background_color': "Цвет фона:",
                'active_features': "Активные функции:"
            }
        }
        
        # Show injector UI first
        self.show_injector_ui()
        
        # After injection, setup main UI
        self.setup_gui()
        self.setup_hotkeys()
        self.start_services()
        self.anti_cheat_bypass()
        self.start_overlay()
        
        # Try to find game process immediately
        threading.Thread(target=self.find_exe_process, daemon=True).start()

    def show_injector_ui(self):
        """Show the injector UI before main cheat UI"""
        self.injector_ui = tk.Tk()
        self.injector_ui.title(self.tr("injector_title"))
        self.injector_ui.geometry("500x400")
        self.injector_ui.resizable(False, False)
        
        # Style
        style = ttk.Style()
        style.configure('TFrame', background='#1e1e1e')
        style.configure('TLabel', background='#1e1e1e', foreground='white')
        style.configure('TButton', background='#2a2a2a', foreground='white')
        style.configure('TCombobox', fieldbackground='#2a2a2a', background='#2a2a2a')
        style.configure('TCheckbutton', background='#1e1e1e', foreground='white')
        
        main_frame = ttk.Frame(self.injector_ui, padding=20)
        main_frame.pack(fill=tk.BOTH, expand=True)
        
        # Status label
        self.injector_status = ttk.Label(main_frame, text=self.tr("injector_status"))
        self.injector_status.pack(pady=10)
        
        # Game path
        path_frame = ttk.Frame(main_frame)
        path_frame.pack(fill=tk.X, pady=5)
        
        ttk.Label(path_frame, text=self.tr("injector_game_path")).pack(side=tk.LEFT)
        self.game_path_entry = ttk.Entry(path_frame)
        self.game_path_entry.pack(side=tk.LEFT, fill=tk.X, expand=True, padx=5)
        self.game_path_entry.insert(0, self.game_path)
        
        browse_btn = ttk.Button(path_frame, text=self.tr("injector_browse"), 
                              command=self.select_exe_for_injector)
        browse_btn.pack(side=tk.LEFT)
        
        # Injection method
        method_frame = ttk.Frame(main_frame)
        method_frame.pack(fill=tk.X, pady=5)
        
        ttk.Label(method_frame, text=self.tr("injector_method")).pack(side=tk.LEFT)
        self.method_var = tk.StringVar()
        self.method_combo = ttk.Combobox(method_frame, textvariable=self.method_var, 
                                       values=["Standard", "Thread Hijacking", "Manual Map", "Advanced Manual Map"])
        self.method_combo.current(0)
        self.method_combo.pack(side=tk.LEFT, fill=tk.X, expand=True, padx=5)
        
        # Options
        options_frame = ttk.Frame(main_frame)
        options_frame.pack(fill=tk.X, pady=5)
        
        self.stealth_var = tk.BooleanVar(value=True)
        stealth_cb = ttk.Checkbutton(options_frame, text=self.tr("injector_stealth"), 
                                   variable=self.stealth_var)
        stealth_cb.pack(side=tk.LEFT, padx=5)
        
        self.cleanup_var = tk.BooleanVar(value=True)
        cleanup_cb = ttk.Checkbutton(options_frame, text=self.tr("injector_cleanup"), 
                                   variable=self.cleanup_var)
        cleanup_cb.pack(side=tk.LEFT, padx=5)
        
        self.obfuscate_var = tk.BooleanVar(value=True)
        obfuscate_cb = ttk.Checkbutton(options_frame, text=self.tr("injector_obfuscate"), 
                                     variable=self.obfuscate_var)
        obfuscate_cb.pack(side=tk.LEFT, padx=5)
        
        # Buttons
        btn_frame = ttk.Frame(main_frame)
        btn_frame.pack(pady=20)
        
        inject_btn = ttk.Button(btn_frame, text=self.tr("injector_start"), 
                              command=self.start_injection)
        inject_btn.pack(side=tk.LEFT, padx=10)
        
        launch_btn = ttk.Button(btn_frame, text=self.tr("injector_launch_game"), 
                              command=self.launch_game_from_injector)
        launch_btn.pack(side=tk.LEFT, padx=10)
        
        self.injector_ui.protocol("WM_DELETE_WINDOW", self.on_injector_close)
        self.injector_ui.mainloop()

    def select_exe_for_injector(self):
        """Select game EXE from injector UI"""
        file_path = filedialog.askopenfilename(title="Select Dynast.io EXE", 
                                             filetypes=[("Executable files", "*.exe")])
        if file_path:
            self.game_path = file_path
            self.game_path_entry.delete(0, tk.END)
            self.game_path_entry.insert(0, file_path)

    def start_injection(self):
        """Start injection process from injector UI"""
        if not os.path.exists(self.game_path):
            messagebox.showerror("Error", "Game EXE not found")
            return
            
        # Configure injector
        self.injector.stealth_mode = self.stealth_var.get()
        self.injector.cleanup_handles = self.cleanup_var.get()
        self.injector.use_obfuscation = self.obfuscate_var.get()
        
        # Get injection method
        method_map = {
            "Standard": self.injector.standard_injection,
            "Thread Hijacking": self.injector.thread_hijacking,
            "Manual Map": self.injector.manual_map,
            "Advanced Manual Map": self.injector.advanced_manual_map
        }
        method = method_map.get(self.method_var.get(), self.injector.standard_injection)
        
        # Check if game is already running
        pid = self.injector.get_process_id(GAME_PROCESS_NAME)
        if pid:
            self.injector_status.config(text=self.tr("injector_running"))
            self.injector_ui.update()
            
            try:
                # Inject into running process
                dll_path = os.path.join(os.path.dirname(__file__), DLL_NAME)
                if not os.path.exists(dll_path):
                    messagebox.showerror("Error", f"DLL not found: {dll_path}")
                    return
                    
                if self.injector.inject(pid, dll_path, method):
                    self.injector_status.config(text=self.tr("injector_success"))
                    self.injected = True
                    time.sleep(2)
                    self.injector_ui.destroy()
                else:
                    self.injector_status.config(text=self.tr("injector_failed"))
            except Exception as e:
                self.injector_status.config(text=f"Error: {str(e)}")
        else:
            # Launch game and inject
            self.injector_status.config(text=self.tr("injector_launching"))
            self.injector_ui.update()
            
            try:
                # Launch game
                game_process = subprocess.Popen(self.game_path)
                time.sleep(5)  # Wait for game to initialize
                
                # Find process ID
                pid = None
                for _ in range(10):  # Try for 10 seconds
                    pid = self.injector.get_process_id(GAME_PROCESS_NAME)
                    if pid:
                        break
                    time.sleep(1)
                
                if not pid:
                    messagebox.showerror("Error", "Failed to find game process")
                    self.injector_status.config(text=self.tr("injector_failed"))
                    return
                
                # Inject DLL
                dll_path = os.path.join(os.path.dirname(__file__), DLL_NAME)
                if not os.path.exists(dll_path):
                    messagebox.showerror("Error", f"DLL not found: {dll_path}")
                    return
                    
                if self.injector.inject(pid, dll_path, method):
                    self.injector_status.config(text=self.tr("injector_success"))
                    self.injected = True
                    time.sleep(2)
                    self.injector_ui.destroy()
                else:
                    self.injector_status.config(text=self.tr("injector_failed"))
            except Exception as e:
                self.injector_status.config(text=f"Error: {str(e)}")

    def launch_game_from_injector(self):
        """Launch game from injector UI without injection"""
        if not os.path.exists(self.game_path):
            messagebox.showerror("Error", "Game EXE not found")
            return
            
        try:
            subprocess.Popen(self.game_path)
            self.injector_status.config(text="Game launched successfully")
        except Exception as e:
            self.injector_status.config(text=f"Error: {str(e)}")

    def on_injector_close(self):
        """Handle injector window close"""
        if not self.injected:
            if messagebox.askyesno(self.tr("exit_confirm"), self.tr("exit_message")):
                self.injector_ui.destroy()
                sys.exit()
        else:
            self.injector_ui.destroy()

    def setup_gui(self):
        """Setup the main cheat GUI"""
        self.root = tk.Tk()
        self.root.title(self.tr("window_title"))
        self.root.geometry("1000x700")
        self.root.resizable(False, False)
        
        # Style
        style = ttk.Style()
        style.theme_use('clam')
        style.configure('TFrame', background='#1e1e1e')
        style.configure('TLabel', background='#1e1e1e', foreground='white')
        style.configure('TButton', background='#2a2a2a', foreground='white')
        style.configure('TCombobox', fieldbackground='#2a2a2a', background='#2a2a2a')
        style.configure('TCheckbutton', background='#1e1e1e', foreground='white')
        style.configure('Selected.TButton', background='#3a3a3a', foreground='white')
        
        # Main frame
        main_frame = ttk.Frame(self.root, padding=10)
        main_frame.pack(fill=tk.BOTH, expand=True)
        
        # Left sidebar
        sidebar_frame = ttk.Frame(main_frame, width=200)
        sidebar_frame.pack(side=tk.LEFT, fill=tk.Y)
        sidebar_frame.pack_propagate(False)
        
        # Menu buttons in sidebar
        self.menu_buttons = {
            'combat': ttk.Button(sidebar_frame, text=self.tr("menu_combat"), command=lambda: self.show_tab('combat'), width=20),
            'build': ttk.Button(sidebar_frame, text=self.tr("menu_build"), command=lambda: self.show_tab('build'), width=20),
            'visual': ttk.Button(sidebar_frame, text=self.tr("menu_visual"), command=lambda: self.show_tab('visual'), width=20),
            'movement': ttk.Button(sidebar_frame, text=self.tr("menu_movement"), command=lambda: self.show_tab('movement'), width=20),
            'system': ttk.Button(sidebar_frame, text=self.tr("menu_system"), command=lambda: self.show_tab('system'), width=20)
        }
        
        for btn in self.menu_buttons.values():
            btn.pack(pady=5, padx=5, fill=tk.X)
        
        # Right content area
        content_frame = ttk.Frame(main_frame)
        content_frame.pack(side=tk.RIGHT, fill=tk.BOTH, expand=True)
        
        # Tab content
        self.tabs = {}
        self.current_tab = None
        
        # Combat tab
        combat_frame = ttk.Frame(content_frame)
        self.tabs['combat'] = combat_frame
        
        # Aimbot settings
        aimbot_frame = ttk.LabelFrame(combat_frame, text=self.tr("aimbot_settings"), padding=10)
        aimbot_frame.pack(fill=tk.X, pady=5)
        
        self.aimbot_var = tk.BooleanVar(value=self.settings['aimbot']['active'])
        aimbot_cb = ttk.Checkbutton(aimbot_frame, text=self.tr("enable_aimbot"), variable=self.aimbot_var)
        aimbot_cb.pack(anchor=tk.W)
        
        ttk.Label(aimbot_frame, text=self.tr("bind")).pack(anchor=tk.W)
        self.aimbot_bind = ttk.Entry(aimbot_frame)
        self.aimbot_bind.insert(0, self.settings['aimbot']['bind'])
        self.aimbot_bind.pack(fill=tk.X)
        
        ttk.Label(aimbot_frame, text=self.tr("fov")).pack(anchor=tk.W)
        self.aimbot_fov = ttk.Scale(aimbot_frame, from_=10, to=360, value=self.settings['aimbot']['fov'])
        self.aimbot_fov.pack(fill=tk.X)
        
        ttk.Label(aimbot_frame, text=self.tr("smoothness")).pack(anchor=tk.W)
        self.aimbot_smooth = ttk.Scale(aimbot_frame, from_=1, to=10, value=self.settings['aimbot']['smoothness'])
        self.aimbot_smooth.pack(fill=tk.X)
        
        # Auto attack
        attack_frame = ttk.LabelFrame(combat_frame, text=self.tr("auto_attack"), padding=10)
        attack_frame.pack(fill=tk.X, pady=5)
        
        self.auto_attack_var = tk.BooleanVar(value=self.settings['auto_attack']['active'])
        attack_cb = ttk.Checkbutton(attack_frame, text=self.tr("enable_auto_attack"), variable=self.auto_attack_var)
        attack_cb.pack(anchor=tk.W)
        
        ttk.Label(attack_frame, text=self.tr("bind")).pack(anchor=tk.W)
        self.attack_bind = ttk.Entry(attack_frame)
        self.attack_bind.insert(0, self.settings['auto_attack']['bind'])
        self.attack_bind.pack(fill=tk.X)
        
        ttk.Label(attack_frame, text=self.tr("distance")).pack(anchor=tk.W)
        self.attack_dist = ttk.Scale(attack_frame, from_=50, to=500, value=self.settings['auto_attack']['distance'])
        self.attack_dist.pack(fill=tk.X)
        
        # God Mode
        god_frame = ttk.LabelFrame(combat_frame, text=self.tr("god_mode"), padding=10)
        god_frame.pack(fill=tk.X, pady=5)
        
        self.god_mode_var = tk.BooleanVar(value=self.settings['god_mode']['active'])
        god_cb = ttk.Checkbutton(god_frame, text=self.tr("enable_god_mode"), variable=self.god_mode_var)
        god_cb.pack(anchor=tk.W)
        
        ttk.Label(god_frame, text=self.tr("bind")).pack(anchor=tk.W)
        self.god_mode_bind = ttk.Entry(god_frame)
        self.god_mode_bind.insert(0, self.settings['god_mode']['bind'])
        self.god_mode_bind.pack(fill=tk.X)
        
        # Build tab
        build_frame = ttk.Frame(content_frame)
        self.tabs['build'] = build_frame
        
        # Auto build
        autobuild_frame = ttk.LabelFrame(build_frame, text=self.tr("auto_build"), padding=10)
        autobuild_frame.pack(fill=tk.X, pady=5)
        
        self.auto_build_var = tk.BooleanVar(value=self.settings['auto_build']['active'])
        build_cb = ttk.Checkbutton(autobuild_frame, text=self.tr("enable_auto_build"), variable=self.auto_build_var)
        build_cb.pack(anchor=tk.W)
        
        ttk.Label(autobuild_frame, text=self.tr("bind")).pack(anchor=tk.W)
        self.build_bind = ttk.Entry(autobuild_frame)
        self.build_bind.insert(0, self.settings['auto_build']['bind'])
        self.build_bind.pack(fill=tk.X)
        
        ttk.Label(autobuild_frame, text=self.tr("templates")).pack(anchor=tk.W)
        self.build_templates = tk.Listbox(autobuild_frame, height=3, selectmode=tk.MULTIPLE)
        for template in ["wall", "tower", "bridge", "ramp", "fort"]:
            self.build_templates.insert(tk.END, template)
        self.build_templates.pack(fill=tk.X)
        
        # Block flipper
        flipper_frame = ttk.LabelFrame(build_frame, text=self.tr("block_flipper"), padding=10)
        flipper_frame.pack(fill=tk.X, pady=5)
        
        self.flipper_var = tk.BooleanVar(value=self.settings['block_flipper']['active'])
        flipper_cb = ttk.Checkbutton(flipper_frame, text=self.tr("enable_block_flipper"), variable=self.flipper_var)
        flipper_cb.pack(anchor=tk.W)
        
        ttk.Label(flipper_frame, text=self.tr("bind")).pack(anchor=tk.W)
        self.flipper_bind = ttk.Entry(flipper_frame)
        self.flipper_bind.insert(0, self.settings['block_flipper']['bind'])
        self.flipper_bind.pack(fill=tk.X)
        
        ttk.Label(flipper_frame, text=self.tr("flip_angle")).pack(anchor=tk.W)
        self.flipper_angle = ttk.Scale(flipper_frame, from_=0, to=180, value=self.settings['block_flipper']['angle'])
        self.flipper_angle.pack(fill=tk.X)
        
        # Visual tab
        visual_frame = ttk.Frame(content_frame)
        self.tabs['visual'] = visual_frame
        
        # ESP settings
        esp_frame = ttk.LabelFrame(visual_frame, text=self.tr("esp_settings"), padding=10)
        esp_frame.pack(fill=tk.X, pady=5)
        
        self.esp_var = tk.BooleanVar(value=self.settings['esp']['active'])
        esp_cb = ttk.Checkbutton(esp_frame, text=self.tr("enable_esp"), variable=self.esp_var)
        esp_cb.pack(anchor=tk.W)
        
        ttk.Label(esp_frame, text=self.tr("bind")).pack(anchor=tk.W)
        self.esp_bind = ttk.Entry(esp_frame)
        self.esp_bind.insert(0, self.settings['esp']['bind'])
        self.esp_bind.pack(fill=tk.X)
        
        ttk.Label(esp_frame, text=self.tr("player_color")).pack(anchor=tk.W)
        self.player_color_btn = ttk.Button(esp_frame, text=self.tr("color_picker"), 
                                         command=lambda: self.choose_color('player'))
        self.player_color_btn.pack(anchor=tk.W)
        
        ttk.Label(esp_frame, text=self.tr("resource_color")).pack(anchor=tk.W)
        self.resource_color_btn = ttk.Button(esp_frame, text=self.tr("color_picker"), 
                                           command=lambda: self.choose_color('resource'))
        self.resource_color_btn.pack(anchor=tk.W)
        
        self.esp_arrows_var = tk.BooleanVar(value=self.esp_arrows)
        arrows_cb = ttk.Checkbutton(esp_frame, text=self.tr("show_arrows"), variable=self.esp_arrows_var)
        arrows_cb.pack(anchor=tk.W)
        
        ttk.Label(esp_frame, text=self.tr("distance")).pack(anchor=tk.W)
        self.esp_distance = ttk.Scale(esp_frame, from_=10, to=100, value=self.esp_distance)
        self.esp_distance.pack(fill=tk.X)
        
        # Zoom settings
        zoom_frame = ttk.LabelFrame(visual_frame, text=self.tr("zoom_settings"), padding=10)
        zoom_frame.pack(fill=tk.X, pady=5)
        
        self.zoom_var = tk.BooleanVar(value=self.settings['zoom']['active'])
        zoom_cb = ttk.Checkbutton(zoom_frame, text=self.tr("enable_zoom"), variable=self.zoom_var)
        zoom_cb.pack(anchor=tk.W)
        
        ttk.Label(zoom_frame, text=self.tr("bind")).pack(anchor=tk.W)
        self.zoom_bind = ttk.Entry(zoom_frame)
        self.zoom_bind.insert(0, self.settings['zoom']['bind'])
        self.zoom_bind.pack(fill=tk.X)
        
        ttk.Label(zoom_frame, text=self.tr("scale")).pack(anchor=tk.W)
        self.zoom_scale = ttk.Scale(zoom_frame, from_=1, to=5, value=self.settings['zoom']['scale'])
        self.zoom_scale.pack(fill=tk.X)
        
        # Visual settings
        visual_settings_frame = ttk.LabelFrame(visual_frame, text=self.tr("visual_settings"), padding=10)
        visual_settings_frame.pack(fill=tk.X, pady=5)
        
        ttk.Label(visual_settings_frame, text=self.tr("text_color")).pack(anchor=tk.W)
        self.text_color_btn = ttk.Button(visual_settings_frame, text=self.tr("color_picker"), 
                                       command=lambda: self.choose_color('text'))
        self.text_color_btn.pack(anchor=tk.W)
        
        ttk.Label(visual_settings_frame, text=self.tr("background_color")).pack(anchor=tk.W)
        self.bg_color_btn = ttk.Button(visual_settings_frame, text=self.tr("color_picker"), 
                                     command=lambda: self.choose_color('background'))
        self.bg_color_btn.pack(anchor=tk.W)
        
        # Movement tab
        movement_frame = ttk.Frame(content_frame)
        self.tabs['movement'] = movement_frame
        
        # Speed boost
        speed_frame = ttk.LabelFrame(movement_frame, text=self.tr("speed_boost"), padding=10)
        speed_frame.pack(fill=tk.X, pady=5)
        
        self.speed_var = tk.BooleanVar(value=self.settings['speed_boost']['active'])
        speed_cb = ttk.Checkbutton(speed_frame, text=self.tr("enable_speed"), variable=self.speed_var)
        speed_cb.pack(anchor=tk.W)
        
        ttk.Label(speed_frame, text=self.tr("bind")).pack(anchor=tk.W)
        self.speed_bind = ttk.Entry(speed_frame)
        self.speed_bind.insert(0, self.settings['speed_boost']['bind'])
        self.speed_bind.pack(fill=tk.X)
        
        ttk.Label(speed_frame, text=self.tr("speed_mult")).pack(anchor=tk.W)
        self.speed_mult = ttk.Scale(speed_frame, from_=1, to=3, value=self.settings['speed_boost']['speed'])
        self.speed_mult.pack(fill=tk.X)
        
        # Target strafe
        strafe_frame = ttk.LabelFrame(movement_frame, text=self.tr("target_strafe"), padding=10)
        strafe_frame.pack(fill=tk.X, pady=5)
        
        self.strafe_var = tk.BooleanVar(value=self.settings['target_strafe']['active'])
        strafe_cb = ttk.Checkbutton(strafe_frame, text=self.tr("enable_target_strafe"), variable=self.strafe_var)
        strafe_cb.pack(anchor=tk.W)
        
        ttk.Label(strafe_frame, text=self.tr("bind")).pack(anchor=tk.W)
        self.strafe_bind = ttk.Entry(strafe_frame)
        self.strafe_bind.insert(0, self.settings['target_strafe']['bind'])
        self.strafe_bind.pack(fill=tk.X)
        
        ttk.Label(strafe_frame, text=self.tr("radius")).pack(anchor=tk.W)
        self.strafe_radius = ttk.Scale(strafe_frame, from_=5, to=20, value=self.settings['target_strafe']['radius'])
        self.strafe_radius.pack(fill=tk.X)
        
        # Phase through walls
        phase_frame = ttk.LabelFrame(movement_frame, text=self.tr("phase_through_walls"), padding=10)
        phase_frame.pack(fill=tk.X, pady=5)
        
        self.phase_var = tk.BooleanVar(value=self.settings['phase_through_walls']['active'])
        phase_cb = ttk.Checkbutton(phase_frame, text=self.tr("enable_phase"), variable=self.phase_var)
        phase_cb.pack(anchor=tk.W)
        
        ttk.Label(phase_frame, text=self.tr("bind")).pack(anchor=tk.W)
        self.phase_bind = ttk.Entry(phase_frame)
        self.phase_bind.insert(0, self.settings['phase_through_walls']['bind'])
        self.phase_bind.pack(fill=tk.X)
        
        # System tab
        system_frame = ttk.Frame(content_frame)
        self.tabs['system'] = system_frame
        
        # Anti-cheat bypass
        ac_frame = ttk.LabelFrame(system_frame, text=self.tr("anti_cheat"), padding=10)
        ac_frame.pack(fill=tk.X, pady=5)
        
        self.ac_var = tk.BooleanVar(value=self.settings['anti_cheat_bypass']['active'])
        ac_cb = ttk.Checkbutton(ac_frame, text=self.tr("enable_anti_cheat"), variable=self.ac_var)
        ac_cb.pack(anchor=tk.W)
        
        ttk.Label(ac_frame, text=self.tr("mode")).pack(anchor=tk.W)
        self.ac_mode = ttk.Combobox(ac_frame, values=["silent", "normal", "aggressive"])
        self.ac_mode.current(0)
        self.ac_mode.pack(fill=tk.X)
        
        self.ac_advanced_var = tk.BooleanVar(value=self.settings['anti_cheat_bypass']['advanced'])
        ac_advanced_cb = ttk.Checkbutton(ac_frame, text=self.tr("advanced"), variable=self.ac_advanced_var)
        ac_advanced_cb.pack(anchor=tk.W)
        
        # Chat spam
        spam_frame = ttk.LabelFrame(system_frame, text=self.tr("chat_spam"), padding=10)
        spam_frame.pack(fill=tk.X, pady=5)
        
        self.spam_var = tk.BooleanVar(value=self.settings['chat_spam']['active'])
        spam_cb = ttk.Checkbutton(spam_frame, text=self.tr("enable_spam"), variable=self.spam_var)
        spam_cb.pack(anchor=tk.W)
        
        ttk.Label(spam_frame, text=self.tr("bind")).pack(anchor=tk.W)
        self.spam_bind = ttk.Entry(spam_frame)
        self.spam_bind.insert(0, self.settings['chat_spam']['bind'])
        self.spam_bind.pack(fill=tk.X)
        
        ttk.Label(spam_frame, text=self.tr("text")).pack(anchor=tk.W)
        self.spam_text = ttk.Entry(spam_frame)
        self.spam_text.insert(0, self.settings['chat_spam']['text'])
        self.spam_text.pack(fill=tk.X)
        
        ttk.Label(spam_frame, text=self.tr("delay")).pack(anchor=tk.W)
        self.spam_delay = ttk.Scale(spam_frame, from_=1, to=30, value=self.settings['chat_spam']['delay'])
        self.spam_delay.pack(fill=tk.X)
        
        # Auto E
        auto_e_frame = ttk.LabelFrame(system_frame, text=self.tr("auto_e"), padding=10)
        auto_e_frame.pack(fill=tk.X, pady=5)
        
        self.auto_e_var = tk.BooleanVar(value=self.settings['auto_e']['active'])
        auto_e_cb = ttk.Checkbutton(auto_e_frame, text=self.tr("enable_auto_e"), variable=self.auto_e_var)
        auto_e_cb.pack(anchor=tk.W)
        
        ttk.Label(auto_e_frame, text=self.tr("bind")).pack(anchor=tk.W)
        self.auto_e_bind = ttk.Entry(auto_e_frame)
        self.auto_e_bind.insert(0, self.settings['auto_e']['bind'])
        self.auto_e_bind.pack(fill=tk.X)
        
        ttk.Label(auto_e_frame, text=self.tr("range")).pack(anchor=tk.W)
        self.auto_e_range = ttk.Scale(auto_e_frame, from_=50, to=300, value=self.settings['auto_e']['range'])
        self.auto_e_range.pack(fill=tk.X)
        
        # Auto leave
        leave_frame = ttk.LabelFrame(system_frame, text=self.tr("auto_leave"), padding=10)
        leave_frame.pack(fill=tk.X, pady=5)
        
        self.leave_var = tk.BooleanVar(value=self.settings['auto_leave']['active'])
        leave_cb = ttk.Checkbutton(leave_frame, text=self.tr("enable_auto_leave"), variable=self.leave_var)
        leave_cb.pack(anchor=tk.W)
        
        ttk.Label(leave_frame, text=self.tr("bind")).pack(anchor=tk.W)
        self.leave_bind = ttk.Entry(leave_frame)
        self.leave_bind.insert(0, self.settings['auto_leave']['bind'])
        self.leave_bind.pack(fill=tk.X)
        
        ttk.Label(leave_frame, text=self.tr("health_threshold")).pack(anchor=tk.W)
        self.leave_threshold = ttk.Scale(leave_frame, from_=1, to=100, value=self.settings['auto_leave']['health_threshold'])
        self.leave_threshold.pack(fill=tk.X)
        
        # Stats settings
        stats_frame = ttk.LabelFrame(system_frame, text=self.tr("stats_settings"), padding=10)
        stats_frame.pack(fill=tk.X, pady=5)
        
        self.stats_var = tk.BooleanVar(value=self.settings['stats']['active'])
        stats_cb = ttk.Checkbutton(stats_frame, text=self.tr("enable_stats"), variable=self.stats_var)
        stats_cb.pack(anchor=tk.W)
        
        self.fps_var = tk.BooleanVar(value=self.settings['stats']['show_fps'])
        fps_cb = ttk.Checkbutton(stats_frame, text=self.tr("show_fps"), variable=self.fps_var)
        fps_cb.pack(anchor=tk.W)
        
        self.cps_var = tk.BooleanVar(value=self.settings['stats']['show_cps'])
        cps_cb = ttk.Checkbutton(stats_frame, text=self.tr("show_cps"), variable=self.cps_var)
        cps_cb.pack(anchor=tk.W)
        
        self.ping_var = tk.BooleanVar(value=self.settings['stats']['show_ping'])
        ping_cb = ttk.Checkbutton(stats_frame, text=self.tr("show_ping"), variable=self.ping_var)
        ping_cb.pack(anchor=tk.W)
        
        # Language
        lang_frame = ttk.LabelFrame(system_frame, text=self.tr("language"), padding=10)
        lang_frame.pack(fill=tk.X, pady=5)
        
        self.lang_var = tk.StringVar(value=self.language)
        lang_combo = ttk.Combobox(lang_frame, textvariable=self.lang_var, values=["english", "russian"])
        lang_combo.pack(fill=tk.X)
        lang_combo.bind("<<ComboboxSelected>>", self.change_language)
        
        # Game controls
        game_frame = ttk.LabelFrame(system_frame, text="Game Controls", padding=10)
        game_frame.pack(fill=tk.X, pady=5)
        
        launch_btn = ttk.Button(game_frame, text=self.tr("launch_game"), command=self.launch_game)
        launch_btn.pack(side=tk.LEFT, padx=5)
        
        browser_btn = ttk.Button(game_frame, text=self.tr("launch_browser"), command=self.launch_browser)
        browser_btn.pack(side=tk.LEFT, padx=5)
        
        find_btn = ttk.Button(game_frame, text=self.tr("find_exe"), command=self.find_exe_process)
        find_btn.pack(side=tk.LEFT, padx=5)
        
        # Status bar
        status_frame = ttk.Frame(content_frame)
        status_frame.pack(fill=tk.X, pady=5)
        
        self.status_label = ttk.Label(status_frame, text=self.tr("status_ready"))
        self.status_label.pack(side=tk.LEFT)
        
        self.inject_status = ttk.Label(status_frame, text=self.tr("inject_status"))
        self.inject_status.pack(side=tk.RIGHT)
        
        # Show first tab by default
        self.show_tab('combat')
        
        # Bind hotkeys
        keyboard.add_hotkey('right shift', self.toggle_menu)
        
        # Start with menu hidden
        self.hidden = False
        self.toggle_menu()

    def show_tab(self, tab_name):
        """Show the selected tab"""
        if self.current_tab:
            self.current_tab.pack_forget()
            
        self.current_tab = self.tabs[tab_name]
        self.current_tab.pack(fill=tk.BOTH, expand=True)
        
        # Highlight the selected menu button
        for name, btn in self.menu_buttons.items():
            if name == tab_name:
                btn.config(style='Selected.TButton')
            else:
                btn.config(style='TButton')

    def toggle_menu(self, event=None):
        """Toggle menu visibility"""
        self.hidden = not self.hidden
        if self.hidden:
            self.root.withdraw()
        else:
            self.root.deiconify()

    def choose_color(self, target):
        """Open color picker and set color"""
        color = colorchooser.askcolor(title=self.tr("color_picker"))
        if color and color[1]:
            if target == 'player':
                self.custom_colors['player'] = [int(c) for c in color[0]]
                self.settings['esp']['player_color'] = [int(c) for c in color[0]]
            elif target == 'resource':
                self.custom_colors['resource'] = [int(c) for c in color[0]]
                self.settings['esp']['resource_color'] = [int(c) for c in color[0]]
            elif target == 'text':
                self.custom_colors['text'] = [int(c) for c in color[0]]
            elif target == 'background':
                self.custom_colors['background'] = [int(c) for c in color[0]] + [150]

    def change_language(self, event=None):
        """Change UI language"""
        self.language = self.lang_var.get()
        # Update all UI elements with new translations
        self.root.title(self.tr("window_title"))
        for name, btn in self.menu_buttons.items():
            btn.config(text=self.tr(f"menu_{name}"))
        # Update other UI elements similarly...

    def tr(self, key):
        """Get translation for current language"""
        return self.translations[self.language].get(key, key)

    def setup_hotkeys(self):
        """Setup all hotkeys"""
        # Aimbot
        keyboard.add_hotkey(self.settings['aimbot']['bind'], self.toggle_aimbot)
        
        # Auto attack
        keyboard.add_hotkey(self.settings['auto_attack']['bind'], self.toggle_auto_attack)
        
        # Auto build
        keyboard.add_hotkey(self.settings['auto_build']['bind'], self.toggle_auto_build)
        
        # Block flipper
        keyboard.add_hotkey(self.settings['block_flipper']['bind'], self.toggle_block_flipper)
        
        # Speed boost
        keyboard.add_hotkey(self.settings['speed_boost']['bind'], self.toggle_speed_boost)
        
        # Zoom
        keyboard.add_hotkey(self.settings['zoom']['bind'], self.toggle_zoom)
        
        # ESP
        keyboard.add_hotkey(self.settings['esp']['bind'], self.toggle_esp)
        
        # Chat spam
        keyboard.add_hotkey(self.settings['chat_spam']['bind'], self.toggle_chat_spam)
        
        # Auto E
        keyboard.add_hotkey(self.settings['auto_e']['bind'], self.toggle_auto_e)
        
        # Target strafe
        keyboard.add_hotkey(self.settings['target_strafe']['bind'], self.toggle_target_strafe)
        
        # Phase through walls
        keyboard.add_hotkey(self.settings['phase_through_walls']['bind'], self.toggle_phase_through_walls)
        
        # Auto leave
        keyboard.add_hotkey(self.settings['auto_leave']['bind'], self.toggle_auto_leave)
        
        # God Mode
        keyboard.add_hotkey(self.settings['god_mode']['bind'], self.toggle_god_mode)

    def start_services(self):
        """Start background services"""
        threading.Thread(target=self.update_game_data, daemon=True).start()
        threading.Thread(target=self.overlay_loop, daemon=True).start()
        threading.Thread(target=self.anti_cheat_bypass_loop, daemon=True).start()

    def update_game_data(self):
        """Update game data in background"""
        while self.running:
            try:
                if self.game_handle:
                    # Update player positions
                    self.player_positions = self.get_player_positions()
                    
                    # Update resource positions
                    self.resource_positions = self.get_resource_positions()
                    
                    # Update stats
                    self.fps = self.get_fps()
                    self.cps = self.get_cps()
                    self.ping = self.get_ping()
                    
                    # Handle auto functions
                    self.handle_auto_functions()
                    
                    # Update active features list
                    self.update_active_features()
                    
            except Exception as e:
                print(f"Error updating game data: {e}")
            
            time.sleep(0.1)

    def update_active_features(self):
        """Update list of active features"""
        self.active_features = []
        if self.aimbot_active:
            self.active_features.append("Aimbot")
        if self.auto_attack_active:
            self.active_features.append("Auto Attack")
        if self.auto_build_active:
            self.active_features.append("Auto Build")
        if self.block_flipper_active:
            self.active_features.append("Block Flipper")
        if self.speed_boost_active:
            self.active_features.append("Speed Boost")
        if self.zoom_active:
            self.active_features.append(f"Zoom (x{self.settings['zoom']['scale']})")
        if self.esp_active:
            self.active_features.append("ESP")
        if self.chat_spam_active:
            self.active_features.append("Chat Spam")
        if self.auto_e_active:
            self.active_features.append("Auto E")
        if self.target_strafe_active:
            self.active_features.append("Target Strafe")
        if self.phase_through_walls_active:
            self.active_features.append("Phase Through Walls")
        if self.auto_leave_active:
            self.active_features.append("Auto Leave")
        if self.god_mode_active:
            self.active_features.append("GOD MODE")

    def get_player_positions(self):
        """Get positions of all players"""
        # This would be implemented with memory reading
        # For now return random positions for testing
        positions = []
        for _ in range(random.randint(0, 10)):
            positions.append((
                random.randint(0, 1000),
                random.randint(0, 1000),
                random.randint(1, 100)  # Distance
            ))
        return positions

    def get_resource_positions(self):
        """Get positions of all resources"""
        # Similar to player positions
        positions = []
        for _ in range(random.randint(0, 20)):
            positions.append((
                random.randint(0, 1000),
                random.randint(0, 1000),
                random.choice(["wood", "stone", "food"])
            ))
        return positions

    def get_fps(self):
        """Get current FPS"""
        return random.randint(30, 120)

    def get_cps(self):
        """Get current CPS (clicks per second)"""
        return random.randint(5, 15)

    def get_ping(self):
        """Get current ping"""
        return random.randint(20, 150)

    def handle_auto_functions(self):
        """Handle all auto functions"""
        if self.auto_e_active:
            self.collect_resources()
            
        if self.aimbot_active:
            self.aim_at_nearest_player()
            
        if self.target_strafe_active:
            self.strafe_around_target()
            
        if self.auto_leave_active and time.time() - self.last_leave_time > 10:
            self.check_auto_leave()
            
        if self.block_flipper_active:
            self.flip_blocks()
            
        if self.god_mode_active:
            self.enable_god_mode()

    def collect_resources(self):
        """Auto collect resources"""
        if not self.resource_positions:
            return
            
        # Find nearest resource
        nearest = min(self.resource_positions, key=lambda x: x[2])
        if nearest[2] <= self.settings['auto_e']['range']:
            # Simulate pressing E
            keyboard.press('e')
            time.sleep(0.1)
            keyboard.release('e')
            time.sleep(self.settings['auto_e']['delay'])

    def aim_at_nearest_player(self):
        """Aim at nearest player"""
        if not self.player_positions:
            return
            
        nearest = min(self.player_positions, key=lambda x: x[2])
        if nearest[2] <= self.settings['aimbot']['fov']:
            # Calculate angle to target
            target_x, target_y, distance = nearest
            
            # Get current mouse position
            current_x, current_y = pyautogui.position()
            
            # Calculate new position with smoothing
            smoothness = max(1, self.settings['aimbot']['smoothness'])
            new_x = current_x + (target_x - current_x) / smoothness
            new_y = current_y + (target_y - current_y) / smoothness
            
            # Move mouse
            pyautogui.moveTo(new_x, new_y)

    def strafe_around_target(self):
        """Strafe around target"""
        if not self.player_positions:
            return
            
        nearest = min(self.player_positions, key=lambda x: x[2])
        target_x, target_y, distance = nearest
        
        # Calculate strafe position
        radius = self.settings['target_strafe']['radius']
        self.strafe_angle = (self.strafe_angle + 10) % 360
        rad = math.radians(self.strafe_angle)
        
        strafe_x = target_x + radius * math.cos(rad)
        strafe_y = target_y + radius * math.sin(rad)
        
        # Move to strafe position
        keys = ['a', 'd', 'w', 's']
        keyboard.release(keys)
        
        if self.strafe_angle < 90 or self.strafe_angle >= 270:
            keyboard.press('d')
        else:
            keyboard.press('a')
            
        if self.strafe_angle < 180:
            keyboard.press('w')
        else:
            keyboard.press('s')

    def check_auto_leave(self):
        """Check if should auto leave"""
        health = self.get_player_health()
        if health <= self.settings['auto_leave']['health_threshold']:
            # Press escape to open menu
            keyboard.press('esc')
            time.sleep(0.5)
            
            # Click leave button (position would need to be adjusted)
            pyautogui.click(1000, 600)
            self.last_leave_time = time.time()

    def flip_blocks(self):
        """Flip blocks at specified angle"""
        # Simulate pressing the flip key (default 'F')
        keyboard.press('f')
        time.sleep(0.1)
        keyboard.release('f')
        time.sleep(self.settings['block_flipper']['delay'])

    def enable_god_mode(self):
        """Enable god mode (invincibility)"""
        # This would patch memory to prevent health decrease
        # For now just simulate healing
        health = self.get_player_health()
        if health < 100:
            # Simulate healing
            keyboard.press('h')
            time.sleep(0.1)
            keyboard.release('h')

    def get_player_health(self):
        """Get player health"""
        # This would read from memory
        if self.god_mode_active:
            return 100  # Always full health in god mode
        return random.randint(0, 100)

    def toggle_aimbot(self):
        """Toggle aimbot"""
        self.aimbot_active = not self.aimbot_active
        self.settings['aimbot']['active'] = self.aimbot_active
        self.status_label.config(text=f"Aimbot {'ON' if self.aimbot_active else 'OFF'}")

    def toggle_auto_attack(self):
        """Toggle auto attack"""
        self.auto_attack_active = not self.auto_attack_active
        self.settings['auto_attack']['active'] = self.auto_attack_active
        self.status_label.config(text=f"Auto Attack {'ON' if self.auto_attack_active else 'OFF'}")

    def toggle_auto_build(self):
        """Toggle auto build"""
        self.auto_build_active = not self.auto_build_active
        self.settings['auto_build']['active'] = self.auto_build_active
        self.status_label.config(text=f"Auto Build {'ON' if self.auto_build_active else 'OFF'}")

    def toggle_block_flipper(self):
        """Toggle block flipper"""
        self.block_flipper_active = not self.block_flipper_active
        self.settings['block_flipper']['active'] = self.block_flipper_active
        self.status_label.config(text=f"Block Flipper {'ON' if self.block_flipper_active else 'OFF'}")

    def toggle_speed_boost(self):
        """Toggle speed boost"""
        self.speed_boost_active = not self.speed_boost_active
        self.settings['speed_boost']['active'] = self.speed_boost_active
        self.status_label.config(text=f"Speed Boost {'ON' if self.speed_boost_active else 'OFF'}")

    def toggle_zoom(self):
        """Toggle zoom"""
        self.zoom_active = not self.zoom_active
        self.settings['zoom']['active'] = self.zoom_active
        self.status_label.config(text=f"Zoom {'ON' if self.zoom_active else 'OFF'}")

    def toggle_esp(self):
        """Toggle ESP"""
        self.esp_active = not self.esp_active
        self.settings['esp']['active'] = self.esp_active
        self.status_label.config(text=f"ESP {'ON' if self.esp_active else 'OFF'}")

    def toggle_chat_spam(self):
        """Toggle chat spam"""
        self.chat_spam_active = not self.chat_spam_active
        self.settings['chat_spam']['active'] = self.chat_spam_active
        self.status_label.config(text=f"Chat Spam {'ON' if self.chat_spam_active else 'OFF'}")
        
        if self.chat_spam_active:
            threading.Thread(target=self.chat_spam_loop, daemon=True).start()

    def toggle_auto_e(self):
        """Toggle auto E"""
        self.auto_e_active = not self.auto_e_active
        self.settings['auto_e']['active'] = self.auto_e_active
        self.status_label.config(text=f"Auto E {'ON' if self.auto_e_active else 'OFF'}")

    def toggle_target_strafe(self):
        """Toggle target strafe"""
        self.target_strafe_active = not self.target_strafe_active
        self.settings['target_strafe']['active'] = self.target_strafe_active
        self.status_label.config(text=f"Target Strafe {'ON' if self.target_strafe_active else 'OFF'}")

    def toggle_phase_through_walls(self):
        """Toggle phase through walls"""
        self.phase_through_walls_active = not self.phase_through_walls_active
        self.settings['phase_through_walls']['active'] = self.phase_through_walls_active
        self.status_label.config(text=f"Phase Through Walls {'ON' if self.phase_through_walls_active else 'OFF'}")

    def toggle_auto_leave(self):
        """Toggle auto leave"""
        self.auto_leave_active = not self.auto_leave_active
        self.settings['auto_leave']['active'] = self.auto_leave_active
        self.status_label.config(text=f"Auto Leave {'ON' if self.auto_leave_active else 'OFF'}")

    def toggle_god_mode(self):
        """Toggle god mode"""
        self.god_mode_active = not self.god_mode_active
        self.settings['god_mode']['active'] = self.god_mode_active
        self.status_label.config(text=f"GOD MODE {'ON' if self.god_mode_active else 'OFF'}")

    def chat_spam_loop(self):
        """Chat spam loop"""
        while self.chat_spam_active and self.running:
            # Open chat
            keyboard.press('t')
            time.sleep(0.1)
            keyboard.release('t')
            time.sleep(0.5)
            
            # Type message
            pyperclip.copy(self.settings['chat_spam']['text'])
            keyboard.press('ctrl')
            keyboard.press('v')
            time.sleep(0.1)
            keyboard.release('v')
            keyboard.release('ctrl')
            time.sleep(0.5)
            
            # Send
            keyboard.press('enter')
            time.sleep(0.1)
            keyboard.release('enter')
            
            # Wait delay
            time.sleep(self.settings['chat_spam']['delay'])

    def anti_cheat_bypass(self):
        """Initial anti-cheat bypass"""
        if not self.settings['anti_cheat_bypass']['active']:
            return
            
        # Various anti-cheat bypass techniques
        self.hide_process()
        self.randomize_memory()
        self.spoof_hardware()
        
        if self.settings['anti_cheat_bypass']['advanced']:
            self.hook_anti_cheat_functions()

    def anti_cheat_bypass_loop(self):
        """Continuous anti-cheat bypass"""
        while self.running:
            if self.settings['anti_cheat_bypass']['active']:
                self.randomize_memory()
                self.spoof_timestamps()
                
            time.sleep(5)

    def hide_process(self):
        """Hide our process"""
        try:
            pid = os.getpid()
            kernel32 = ctypes.windll.kernel32
            
            # Remove from PEB
            PROCESS_ALL_ACCESS = 0x1F0FFF
            process_handle = kernel32.OpenProcess(PROCESS_ALL_ACCESS, False, pid)
            
            if process_handle:
                peb_addr = ctypes.c_ulonglong()
                res = ctypes.windll.ntdll.NtQueryInformationProcess(
                    process_handle, 0, ctypes.byref(peb_addr), ctypes.sizeof(peb_addr), None)
                
                if res == 0:
                    peb = ctypes.cast(peb_addr.value, ctypes.POINTER(ctypes.c_ubyte))
                    peb.contents.value = 0
                    
                kernel32.CloseHandle(process_handle)
        except:
            pass

    def randomize_memory(self):
        """Randomize memory signatures"""
        try:
            # Get our module base
            kernel32 = ctypes.windll.kernel32
            module = kernel32.GetModuleHandleA(None)
            
            # Get module info
            MODULEINFO = ctypes.create_string_buffer(24)
            ctypes.windll.psapi.GetModuleInformation(
                kernel32.GetCurrentProcess(), module, ctypes.byref(MODULEINFO), 24)
            
            base = ctypes.cast(ctypes.byref(MODULEINFO), ctypes.POINTER(ctypes.c_ulonglong)).contents.value
            size = ctypes.cast(ctypes.byref(MODULEINFO) + 8, ctypes.POINTER(ctypes.c_ulong)).contents.value
            
            # XOR random sections
            key = random.randint(1, 255)
            for i in range(0, size, 4096):
                try:
                    buf = (ctypes.c_ubyte * 4096).from_address(base + i)
                    for j in range(4096):
                        buf[j] ^= key
                except:
                    continue
        except:
            pass

    def spoof_hardware(self):
        """Spoof hardware identifiers"""
        try:
            # Spoof MAC address
            import uuid
            mac = uuid.getnode()
            new_mac = random.randint(0, 281474976710655)  # 48-bit number
            uuid._UuidCreate = lambda: new_mac
            
            # Spoof other hardware IDs
            ctypes.windll.kernel32.SetComputerNameExA(3, str(random.randint(100000, 999999)).encode())
        except:
            pass

    def spoof_timestamps(self):
        """Spoof timestamps"""
        try:
            # Modify PE header timestamps
            kernel32 = ctypes.windll.kernel32
            module = kernel32.GetModuleHandleA(None)
            
            dos_header = ctypes.cast(module, ctypes.POINTER(ctypes.c_ubyte * 64)).contents
            if dos_header[0] != 0x4D or dos_header[1] != 0x5A:  # 'MZ'
                return
                
            pe_offset = ctypes.cast(dos_header[60:64], ctypes.POINTER(ctypes.c_uint32)).contents.value
            pe_header = ctypes.cast(module + pe_offset, ctypes.POINTER(ctypes.c_ubyte * 24)).contents
            
            if pe_header[0] != 0x50 or pe_header[1] != 0x45:  # 'PE'
                return
                
            # Modify timestamp at offset 8
            timestamp_ptr = ctypes.cast(module + pe_offset + 8, ctypes.POINTER(ctypes.c_uint32))
            timestamp_ptr.contents.value = random.randint(0, 0xFFFFFFFF)
        except:
            pass

    def hook_anti_cheat_functions(self):
        """Hook anti-cheat functions"""
        try:
            # This would require actual function hooking
            # For demonstration, we'll just patch some common AC functions
            
            # Get kernel32 base
            kernel32 = ctypes.windll.kernel32
            kernel32_base = kernel32.GetModuleHandleA(b"kernel32.dll")
            
            # Patch IsDebuggerPresent
            is_debugger_present = kernel32.GetProcAddress(kernel32_base, b"IsDebuggerPresent")
            if is_debugger_present:
                # Write RET 0
                old_protect = ctypes.c_ulong(0)
                kernel32.VirtualProtect(is_debugger_present, 5, 0x40, ctypes.byref(old_protect))
                ctypes.memset(is_debugger_present, 0xC3, 1)  # RET
                ctypes.memset(is_debugger_present + 1, 0x90, 4)  # NOPs
                kernel32.VirtualProtect(is_debugger_present, 5, old_protect, ctypes.byref(old_protect))
        except:
            pass

    def start_overlay(self):
        """Start overlay window"""
        if not self.overlay_thread:
            self.overlay_thread = threading.Thread(target=self.overlay_loop, daemon=True)
            self.overlay_thread.start()

    def overlay_loop(self):
        """Overlay drawing loop"""
        while self.running:
            try:
                if not self.game_window:
                    self.find_game_window()
                    time.sleep(1)
                    continue
                    
                # Get window position and size
                left, top, right, bottom = win32gui.GetWindowRect(self.game_handle)
                width = right - left
                height = bottom - top
                
                # Create transparent overlay
                overlay = Image.new('RGBA', (width, height), (0, 0, 0, 0))
                draw = ImageDraw.Draw(overlay)
                
                # Draw ESP
                if self.esp_active:
                    self.draw_esp(draw, width, height)
                
                # Draw stats
                if self.settings['stats']['active']:
                    self.draw_stats(draw, width, height)
                
                # Draw active features
                self.draw_active_features(draw, width, height)
                
                # Show overlay
                if not self.overlay:
                    self.create_overlay_window(left, top, width, height)
                
                # Update overlay
                if self.overlay:
                    # Convert to numpy array for OpenCV
                    np_image = np.array(overlay)
                    cv2_image = cv2.cvtColor(np_image, cv2.COLOR_RGBA2BGRA)
                    
                    # Update overlay window
                    cv2.imshow('Delta Overlay', cv2_image)
                    cv2.waitKey(1)
                    
            except Exception as e:
                print(f"Overlay error: {e}")
                time.sleep(1)

    def draw_esp(self, draw, width, height):
        """Draw ESP on overlay"""
        # Draw players
        for x, y, distance in self.player_positions:
            if distance <= self.esp_distance:
                # Convert game coordinates to screen coordinates
                screen_x = int(x * width / 1000)
                screen_y = int(y * height / 1000)
                
                # Draw box
                box_size = max(10, 50 - distance // 2)
                color = tuple(self.custom_colors['player']) + (200,)
                draw.rectangle(
                    [(screen_x - box_size//2, screen_y - box_size//2),
                     (screen_x + box_size//2, screen_y + box_size//2)],
                    outline=color, width=2)
                
                # Draw distance
                draw.text(
                    (screen_x, screen_y - box_size//2 - 15),
                    f"{distance}m", fill=color)
                
                # Draw arrow if enabled
                if self.esp_arrows_var.get():
                    center_x = width // 2
                    center_y = height // 2
                    draw.line(
                        [(center_x, center_y), (screen_x, screen_y)],
                        fill=color, width=1)
        
        # Draw resources
        for x, y, res_type in self.resource_positions:
            # Convert game coordinates to screen coordinates
            screen_x = int(x * width / 1000)
            screen_y = int(y * height / 1000)
            
            # Determine color based on resource type
            if res_type == "wood":
                color = (34, 139, 34, 200)  # Forest green
            elif res_type == "stone":
                color = (169, 169, 169, 200)  # Dark gray
            else:  # food
                color = (255, 215, 0, 200)  # Gold
            
            # Draw circle
            draw.ellipse(
                [(screen_x - 5, screen_y - 5),
                 (screen_x + 5, screen_y + 5)],
                outline=color, width=2)

    def draw_stats(self, draw, width, height):
        """Draw stats on overlay"""
        stats = []
        
        if self.settings['stats']['show_fps']:
            stats.append(f"FPS: {self.fps}")
        if self.settings['stats']['show_cps']:
            stats.append(f"CPS: {self.cps}")
        if self.settings['stats']['show_ping']:
            stats.append(f"PING: {self.ping}")
            
        if not stats:
            return
            
        # Load font
        try:
            font = ImageFont.truetype("arial.ttf", 20)
        except:
            font = ImageFont.load_default()
        
        # Draw stats in top-left corner
        y_pos = 10
        text_color = tuple(self.custom_colors['text']) + (200,)
        for stat in stats:
            draw.text((10, y_pos), stat, fill=text_color, font=font)
            y_pos += 25

    def draw_active_features(self, draw, width, height):
        """Draw active features list"""
        if not self.active_features:
            return
            
        # Load font
        try:
            font = ImageFont.truetype("arial.ttf", 20)
        except:
            font = ImageFont.load_default()
        
        # Draw in bottom-right corner
        text_color = tuple(self.custom_colors['text']) + (200,)
        bg_color = tuple(self.custom_colors['background'])
        
        # Calculate text size
        max_width = 0
        total_height = len(self.active_features) * 25
        
        for feature in self.active_features:
            w, h = draw.textsize(feature, font=font)
            if w > max_width:
                max_width = w
                
        # Draw background
        draw.rectangle(
            [(width - max_width - 20, height - total_height - 20),
             (width - 10, height - 10)],
            fill=bg_color)
        
        # Draw features
        y_pos = height - total_height - 10
        for feature in self.active_features:
            draw.text((width - max_width - 15, y_pos), feature, fill=text_color, font=font)
            y_pos += 25

    def create_overlay_window(self, x, y, width, height):
        """Create overlay window"""
        try:
            # Create transparent window
            cv2.namedWindow('Delta Overlay', cv2.WINDOW_NORMAL)
            cv2.resizeWindow('Delta Overlay', width, height)
            cv2.moveWindow('Delta Overlay', x, y)
            
            # Set window attributes
            hwnd = cv2.getWindowProperty('Delta Overlay', cv2.WND_PROP_HWND)
            win32gui.SetWindowLong(hwnd, win32con.GWL_EXSTYLE, 
                                  win32gui.GetWindowLong(hwnd, win32con.GWL_EXSTYLE) | 
                                  win32con.WS_EX_LAYERED | win32con.WS_EX_TRANSPARENT)
            
            # Set window always on top
            win32gui.SetWindowPos(hwnd, win32con.HWND_TOPMOST, 0, 0, 0, 0,
                                 win32con.SWP_NOMOVE | win32con.SWP_NOSIZE)
            
            self.overlay = True
        except Exception as e:
            print(f"Error creating overlay: {e}")
            self.overlay = False

    def find_game_window(self):
        """Find game window"""
        try:
            windows = gw.getWindowsWithTitle(GAME_WINDOW_TITLE)
            if windows:
                self.game_window = windows[0]
                self.game_handle = win32gui.FindWindow(None, GAME_WINDOW_TITLE)
                return True
        except:
            pass
        return False

    def find_exe_process(self):
        """Find game process"""
        try:
            pid = self.injector.get_process_id(GAME_PROCESS_NAME)
            if pid:
                self.game_pid = pid
                self.pm = pymem.Pymem()
                self.pm.open_process_from_id(pid)
                self.game_base_address = self.pm.base_address
                self.inject_status.config(text="Injection Status: Injected")
                return True
        except:
            pass
        
        self.inject_status.config(text="Injection Status: Not Found")
        return False

    def launch_game(self):
        """Launch game executable"""
        try:
            if os.path.exists(self.game_path):
                subprocess.Popen(self.game_path)
                self.status_label.config(text="Launching game...")
                
                # Wait for game to start
                for _ in range(30):
                    if self.find_exe_process():
                        break
                    time.sleep(1)
            else:
                self.status_label.config(text="Game EXE not found")
        except Exception as e:
            self.status_label.config(text=f"Error: {str(e)}")

    def launch_browser(self):
        """Launch game in browser"""
        try:
            webbrowser.open("https://dynast.io")
            self.status_label.config(text="Opening browser...")
        except Exception as e:
            self.status_label.config(text=f"Error: {str(e)}")

    def on_close(self):
        """Handle window close"""
        if messagebox.askyesno(self.tr("exit_confirm"), self.tr("exit_message")):
            self.running = False
            if self.overlay:
                cv2.destroyAllWindows()
            self.root.destroy()
            sys.exit()

if __name__ == "__main__":
    cheat = DynastioCheat()
    cheat.root.protocol("WM_DELETE_WINDOW", cheat.on_close)
    cheat.root.mainloop()
