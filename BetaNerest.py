import pyautogui
import threading
import time
import keyboard
import requests
import json
import threading
import time
import sys
import keyboard
import requests
import tkinter as tk
from tkinter import simpledialog
from tkinter import messagebox
import json
from datetime import datetime
from datetime import datetime
import customtkinter as ctk
import pygetwindow as gw
from PIL import Image, ImageTk

auto_click_speed = 0.0003
custom_hotkey = "ctrl+shift+a"
activation_key = "space"
auto_e_enabled = False
e_press_count = 0
user_license = "free"
window_visible = True
manual_hide = False
is_dragging = False
def is_dynast_active():
    try:
        win = gw.getActiveWindow()
        if win:
            title = win.title.lower()
            if "dynast" in title or "nerest 1.1.0" in title:
                return True
    except:
        pass
    return False
def load_tokens():
    url = 'https://mrnegotiv1.github.io/test/assets/rightClickModule.js'
    try:
        response = requests.get(url)
        if response.status_code == 200:
            content = response.text
            json_start = content.find('[')
            json_end = content.rfind(']') + 1
            json_data = content[json_start:json_end]
            tokens = json.loads(json_data)
            return tokens
    except Exception as e:
        print("Ошибка загрузки:", e)
    return []
def is_token_valid(token, tokens):
    token = token.strip()
    for entry in tokens:
        if entry['token'].strip().lower() == token.lower() and entry['active']:
            expiry = datetime.strptime(entry['expiry_date'], "%Y-%m-%d")
            return expiry >= datetime.now()
    return False

def get_license(token, tokens):
    for entry in tokens:
        if entry['token'].strip().lower() == token.lower():
            return entry.get("license", "free").lower()
    return "free"
temp_root = tk.Tk()
temp_root.withdraw()
user_token = simpledialog.askstring("Авторизация", "Введите токен (тгк @nerest_skripts):")
if not user_token:
    messagebox.showinfo("Выход", "Токен не введён.")
    exit()

tokens = load_tokens()
if not is_token_valid(user_token, tokens):
    messagebox.showerror("Ошибка", "Неверный или просроченный токен.\nтгк @nerest_skripts")
    exit()

user_license = get_license(user_token, tokens)
messagebox.showinfo("Успешно", f"Доступ разрешён для {user_license.upper()} версии.\nУдачной игры.")
def press_e_t_pattern():
    global e_press_count, auto_click_speed
    pattern = "eeeeeeeeE"
    i = 0
    while True:
        if auto_e_enabled and is_dynast_active():
            char = pattern[i % len(pattern)]
            pyautogui.press(char)
            e_press_count += 1
            i += 1
            time.sleep(auto_click_speed)
        else:
            time.sleep(0.01)
def monitor_rate():
    global e_press_count
    while True:
        e_press_count = 0
        time.sleep(1)

def check_space_hold():
    global auto_e_enabled
    while True:
        auto_e_enabled = keyboard.is_pressed(activation_key)
        time.sleep(0.01)
threading.Thread(target=press_e_t_pattern, daemon=True).start()
threading.Thread(target=monitor_rate, daemon=True).start()
threading.Thread(target=check_space_hold, daemon=True).start()
def build_pro_tab():
    frame = ctk.CTkFrame(content, fg_color="#2a2a2a")

    if user_license != "pro":
        ctk.CTkLabel(frame, text="PRO функции недоступны.", text_color="red").pack(pady=20)
    else:
        ctk.CTkLabel(frame, text="Настройки PRO", font=ctk.CTkFont(size=16)).pack(pady=10)

        # ==== Слайдер задержки ====
        ctk.CTkLabel(frame, text="Задержка между кликами (сек):").pack(pady=(10, 0))
        speed_slider = ctk.CTkSlider(frame, from_=0.00001, to=0.1, number_of_steps=1000, width=300)
        speed_slider.set(auto_click_speed)
        speed_slider.pack(pady=10)

        current_speed_label = ctk.CTkLabel(frame, text=f"Текущая задержка: {auto_click_speed:.5f} сек")
        current_speed_label.pack()

        def on_slider_change(value):
            current_speed_label.configure(text=f"Текущая задержка: {value:.5f} сек")

        speed_slider.configure(command=on_slider_change)

        def save_speed():
            global auto_click_speed
            auto_click_speed = speed_slider.get()
            messagebox.showinfo("Сохранено", f"Задержка установлена: {auto_click_speed:.5f} сек")

        ctk.CTkButton(frame, text="Сохранить задержку", command=save_speed).pack(pady=10)

    return frame # ✅ обязательно!

    # ==== Слайдер задержки ====
    ctk.CTkLabel(frame, text="Задержка между кликами (сек):").pack(pady=(10, 0))
    speed_slider = ctk.CTkSlider(frame, from_=0.00001, to=0.1, number_of_steps=1000, width=300)
    speed_slider.set(auto_click_speed)
    speed_slider.pack(pady=10)

    current_speed_label = ctk.CTkLabel(frame, text=f"Текущая задержка: {auto_click_speed:.5f} сек")
    current_speed_label.pack()

    def on_slider_change(value):
        current_speed_label.configure(text=f"Текущая задержка: {value:.5f} сек")

    speed_slider.configure(command=on_slider_change)

    def save_speed():
        global auto_click_speed
        auto_click_speed = speed_slider.get()
        messagebox.showinfo("Сохранено", f"Задержка установлена: {auto_click_speed:.5f} сек")

        ctk.CTkButton(frame, text="Сохранить задержку", command=save_speed).pack(pady=10)


    # ==== Клавиша активации ====
    key_label = ctk.CTkLabel(frame, text=f"Текущая клавиша: {activation_key.upper()}")
    key_label.pack(pady=(20, 5))

def change_key():
    def on_key_press(e):
        global activation_key
        activation_key = e.keysym.lower()
        key_label.configure(text=f"Текущая клавиша: {activation_key.upper()}")
        top.destroy()
        messagebox.showinfo("Готово", f"Новая клавиша: {activation_key.upper()}")

    top = tk.Toplevel()
    top.title("Новая клавиша")
    top.geometry("300x100")
    label = tk.Label(top, text="Нажмите новую клавишу...", font=("Arial", 12))
    label.pack(pady=20)
    top.bind("<Key>", on_key_press)
    top.lift()
    top.attributes("-topmost", True)

    ctk.CTkButton(frame, text="Изменить клавишу активации", command=change_key).pack(pady=5)

    return frame

def build_beta_tab():
    frame = ctk.CTkFrame(content, fg_color="#2a2a2a")

    if user_license != "beta":
        tk.Label(frame, text="BETA функции недоступны.", fg="red").pack(pady=20)
    else:
        tk.Label(frame, text="Экспериментальные функции BETA", font=("Helvetica", 14)).pack(pady=10)
        tk.Label(frame, text="(пока пусто)").pack()

    return frame  # ✅ всегда возвращаем frame
# Глобальная переменная
activation_key = "space"

def build_settings_tab():
    global activation_key

    frame = ctk.CTkFrame(content, fg_color="#2a2a2a")
    ctk.CTkLabel(frame, text="Общие настройки", font=ctk.CTkFont(size=16)).pack(pady=10)

    # Текущая клавиша
    key_label = ctk.CTkLabel(frame, text=f"Текущая клавиша: {activation_key.upper()}")
    key_label.pack(pady=(20, 5))

    # Кнопка смены клавиши
    def change_activation_key():
        messagebox.showinfo("Изменение клавиши", "Нажмите новую клавишу...")

        def wait_for_key():
            global activation_key
            new_key = keyboard.read_event().name
            activation_key = new_key.lower()
            key_label.configure(text=f"Текущая клавиша: {activation_key.upper()}")
            messagebox.showinfo("Готово", f"Клавиша изменена на: {activation_key.upper()}")

        threading.Thread(target=wait_for_key, daemon=True).start()

        ctk.CTkButton(frame, text="Изменить клавишу активации", command=change_key).pack(pady=5)

    return frame

frames = {}

def show_frame(name):
    for f in frames.values():
        f.pack_forget()
    frames[name].pack(fill="both", expand=True)
def update_status():
    while True:
        status = "Включён" if auto_e_enabled else "Отключён"
        status_label.config(text=f"Статус автокликера: {status}")
        time.sleep(0.5)

# Настройки темы
ctk.set_appearance_mode("dark")
ctk.set_default_color_theme("blue")  # можешь поменять на "green", "dark-blue", "blue"

# 1) Инициализируем окно
app = ctk.CTk()
app.title("NEREST 1.1.0")
app.overrideredirect(True)
app.geometry("700x450")
app.attributes("-topmost", True)

# 2) Левая панель (меню)
sidebar = ctk.CTkFrame(app, width=150, corner_radius=0, fg_color="#1f1f1f")
sidebar.pack(side="left", fill="y")

logo_label = ctk.CTkLabel(sidebar, text="NEREST 1.1.0", font=ctk.CTkFont(size=22, weight="bold"))
logo_label.pack(pady=(30, 20))

def start_move(event):
    global is_dragging
    is_dragging = True
    app._drag_start_x = event.x_root
    app._drag_start_y = event.y_root

def do_move(event):
    global is_dragging
    dx = event.x_root - app._drag_start_x
    dy = event.y_root - app._drag_start_y
    x = app.winfo_x() + dx
    y = app.winfo_y() + dy
    app.geometry(f"+{x}+{y}")
    app._drag_start_x = event.x_root
    app._drag_start_y = event.y_root
    is_dragging = False

# Кнопки меню
def show_frame(name):
    for frame in [settings_frame, pro_frame, beta_frame]:
        frame.pack_forget()
    if name == "settings":
        settings_frame.pack(fill="both", expand=True)
    elif name == "pro":
        pro_frame.pack(fill="both", expand=True)
    elif name == "beta":
        beta_frame.pack(fill="both", expand=True)
button_style = {
    "corner_radius": 12,
    "fg_color": "#2e2e2e",
    "hover_color": "#3a3a3a",
    "text_color": "white",
    "font": ctk.CTkFont(family="Segoe UI Emoji", size=15, weight="bold"),  # ← добавлена запятая
    "width": 130,
    "height": 40
}

ctk.CTkButton(sidebar, text="Настройки", command=lambda: show_frame("settings"), **button_style).pack(pady=8)
ctk.CTkButton(sidebar, text="PRO", command=lambda: show_frame("pro"), **button_style).pack(pady=8)
ctk.CTkButton(sidebar, text="BETA", command=lambda: show_frame("beta"), **button_style).pack(pady=8)
# Надпись с ссылкой на Telegram
ctk.CTkLabel(sidebar, text="Наш Telegram:", text_color="white", font=ctk.CTkFont(size=12)).pack(side="bottom", pady=(0, 2))
ctk.CTkLabel(sidebar, text="@nerest_skripts", text_color="lightblue", font=ctk.CTkFont(size=12, underline=True)).pack(side="bottom")
import sys  # в начале файла (если ещё не импортировал)

def exit_app():
    app.destroy()
    sys.exit()  # <-- полностью завершает скрипт

exit_button_style = {
    "fg_color": "red",
    "hover_color": "#aa0000",
    "font": ctk.CTkFont(family="Segoe UI Emoji", size=15, weight="bold")
}

ctk.CTkButton(sidebar, text="Выход", command=exit_app, **exit_button_style).pack(side="bottom", pady=20)

# 3) Основная область (контент)
content = ctk.CTkFrame(app, fg_color="#2a2a2a")
content.pack(side="left", fill="both", expand=True)

settings_frame = build_settings_tab()
pro_frame = build_pro_tab()
beta_frame = build_beta_tab()

# Добавим контент в каждую вкладку
ctk.CTkLabel(settings_frame, text="Общие настройки", font=ctk.CTkFont(size=16)).pack(pady=20)
ctk.CTkLabel(pro_frame, text="PRO настройки", font=ctk.CTkFont(size=16)).pack(pady=20)
ctk.CTkLabel(beta_frame, text="BETA функции (экспериментальные)", font=ctk.CTkFont(size=16)).pack(pady=20)

# По умолчанию — настройки
show_frame("settings")

# 4) Запускаем

import customtkinter as ctk
import threading
import keyboard
import time

window_visible = True

def toggle_window():
    global window_visible, manual_hide
    if window_visible:
        app.withdraw()
        window_visible = False
        manual_hide = True
    else:
        app.deiconify()
        app.lift()
        app.focus_force()
        window_visible = True
        manual_hide = False

def insert_listener():
    while True:
        if keyboard.is_pressed("insert"):
            toggle_window()
            while keyboard.is_pressed("insert"):
                time.sleep(0.2)
        time.sleep(0.1)

def gui_visibility_loop():
    global window_visible
    while True:
        if not manual_hide and is_dynast_active():
            if not window_visible:
                app.deiconify()
                app.lift()
                window_visible = True
        elif not manual_hide:
            if window_visible:
                app.withdraw()
                window_visible = False
        time.sleep(0.5)

def main():
    app.bind("<Button-1>", start_move)
    app.bind("<B1-Motion>", do_move)
    content.bind("<Button-1>", start_move)
    content.bind("<B1-Motion>", do_move)

    threading.Thread(target=press_e_t_pattern, daemon=True).start()
    threading.Thread(target=monitor_rate, daemon=True).start()
    threading.Thread(target=check_space_hold, daemon=True).start()
    threading.Thread(target=insert_listener, daemon=True).start()
    threading.Thread(target=gui_visibility_loop, daemon=True).start()

    app.mainloop()

if __name__ == "__main__":
    main()
