import os
import subprocess
import sys

# Install yt-dlp if not present
subprocess.check_call([sys.executable, "-m", "pip", "install", "yt-dlp", "mutagen"])

import yt_dlp

tracks = {
    'dark': 'ytsearch1:Bleach Stand Up Be Strong OST',
    'hollow': 'ytsearch1:Bleach Hollowed Shiro Sagisu OST',
    'quincy': 'ytsearch1:Bleach Chokkaku Vandenreich Theme OST'
}

for name, query in tracks.items():
    ydl_opts = {
        'format': 'bestaudio/best',
        'outtmpl': f'./bg-{name}.%(ext)s',
        'postprocessors': [{
            'key': 'FFmpegExtractAudio',
            'preferredcodec': 'mp3',
            'preferredquality': '192',
        }],
        'noplaylist': True,
        'quiet': False
    }

    # Remove existing files
    if os.path.exists(f'bg-{name}.mp3'):
        os.remove(f'bg-{name}.mp3')

    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        ydl.download([query])

print("Download complete!")
