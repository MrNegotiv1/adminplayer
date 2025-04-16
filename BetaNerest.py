import pyautogui
import threading
import time
import keyboard
import requests
import json
from datetime import datetime
import tkinter as tk
from tkinter import simpledialog, messagebox

auto_click_speed = 0.00003
custom_hotkey = "ctrl+shift+a"
auto_e_enabled = False
e_press_count = 0
user_license = "free"
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
    messagebox.showerror("Ошибка", "❌ Неверный или просроченный токен.\nтгк @nerest_skripts")
    exit()

user_license = get_license(user_token, tokens)
messagebox.showinfo("Успешно", f"✅ Доступ разрешён для {user_license.upper()} версии.\nУдерживайте ПРОБЕЛ для активации.")
def press_e_t_pattern():
    global e_press_count, auto_click_speed
    pattern = "eeeeeeeeE"
    i = 0
    while True:
        if auto_e_enabled:
            char = pattern[i % len(pattern)]
            pyautogui.press(char)
            e_press_count += 1
            i += 1
            time.sleep(auto_click_speed)
        else:
            time.sleep(0.00001)
def monitor_rate():
    global e_press_count
    while True:
        e_press_count = 0
        time.sleep(1)

def check_space_hold():
    global auto_e_enabled
    while True:
        auto_e_enabled = keyboard.is_pressed('space')
        time.sleep(0.01)
threading.Thread(target=press_e_t_pattern, daemon=True).start()
threading.Thread(target=monitor_rate, daemon=True).start()
threading.Thread(target=check_space_hold, daemon=True).start()
def build_pro_tab():
    frame = tk.Frame(main_win)
    if user_license != "pro":
        tk.Label(frame, text="PRO функции недоступны.", fg="red").pack(pady=20)
        return frame

    tk.Label(frame, text="Настройки PRO", font=("Helvetica", 14)).pack(pady=10)

    # Задержка между кликами
    tk.Label(frame, text="Задержка между кликами (сек):").pack()
    speed_entry = tk.Entry(frame)
    speed_entry.insert(0, str(auto_click_speed))
    speed_entry.pack()

    def save_speed():
        global auto_click_speed
        try:
            auto_click_speed = float(speed_entry.get())
            messagebox.showinfo("Сохранено", f"Задержка: {auto_click_speed}")
        except:
            messagebox.showerror("Ошибка", "Введите число!")

    tk.Button(frame, text="Сохранить", command=save_speed).pack(pady=5)
    return frame
def build_beta_tab():
    frame = tk.Frame(main_win)
    if user_license != "beta":
        tk.Label(frame, text="BETA функции недоступны.", fg="red").pack(pady=20)
        return frame

    tk.Label(frame, text="Экспериментальные функции BETA", font=("Helvetica", 14)).pack(pady=10)
    tk.Label(frame, text="(пока пусто)").pack()
    return frame
def build_settings_tab():
    frame = tk.Frame(main_win)
    tk.Label(frame, text="Общие настройки", font=("Helvetica", 14)).pack(pady=10)
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
main_win = tk.Tk()
main_win.overrideredirect(True)
main_win.geometry("500x400")
main_win.config(bg="#d0d0d0")

# Заголовок кастомный
title_bar = tk.Frame(main_win, bg="#4a4a4a", relief="raised", bd=0)
title_bar.pack(fill="x")

title_label = tk.Label(title_bar, text="𝑩𝑬𝑻𝑨 𝑵𝑬𝑹𝑬𝑺𝑻", bg="#4a4a4a", fg="white")
title_label.pack(side="left", padx=10)

# Закрыть окно
close_button = tk.Button(title_bar, text="✕", bg="#4a4a4a", fg="white", bd=0, command=main_win.destroy)
close_button.pack(side="right", padx=10)

# Перетаскивание
def start_move(event):
    main_win.x = event.x
    main_win.y = event.y

def stop_move(event):
    main_win.x = None
    main_win.y = None

def do_move(event):
    deltax = event.x - main_win.x
    deltay = event.y - main_win.y
    x = main_win.winfo_x() + deltax
    y = main_win.winfo_y() + deltay
    main_win.geometry(f"+{x}+{y}")

title_bar.bind("<Button-1>", start_move)
title_bar.bind("<B1-Motion>", do_move)
button_frame = tk.Frame(main_win, bg="#d0d0d0")
button_frame.pack()

tk.Button(button_frame, text="Настройки", command=lambda: show_frame("settings")).pack(side="left", padx=5, pady=5)
tk.Button(button_frame, text="PRO", command=lambda: show_frame("pro")).pack(side="left", padx=5)
tk.Button(button_frame, text="BETA", command=lambda: show_frame("beta")).pack(side="left", padx=5)
frames["settings"] = build_settings_tab()
frames["pro"] = build_pro_tab()
frames["beta"] = build_beta_tab()

show_frame("settings")
status_label = tk.Label(main_win, text="Статус автокликера: Отключён", font=("Helvetica", 12), bg="#d0d0d0")
status_label.pack(pady=5)

tk.Label(main_win, text=f"Лицензия: {user_license.upper()}", font=("Helvetica", 12), bg="#d0d0d0").pack()

tk.Button(main_win, text="❌ Выход", bg="red", fg="white", command=lambda: (main_win.destroy(), exit())).pack(pady=10)
tk.Label(main_win, text="telegram – @nerest_skripts", fg="gray", bg="#d0d0d0").pack(side="bottom", pady=5)

threading.Thread(target=update_status, daemon=True).start()

def toggle_auto_clicker():
    global auto_e_enabled
    auto_e_enabled = not auto_e_enabled

if user_license == "pro":
    keyboard.add_hotkey(custom_hotkey, toggle_auto_clicker)

# ▶️ ВКЛ/ВЫКЛ ОКНА ПО INSERT
window_visible = True

def toggle_window():
    global window_visible
    if window_visible:
        main_win.withdraw()
    else:
        main_win.deiconify()
    window_visible = not window_visible

keyboard.add_hotkey("insert", toggle_window)
main_win.mainloop()

if __name__ == '__main__':
    main()
