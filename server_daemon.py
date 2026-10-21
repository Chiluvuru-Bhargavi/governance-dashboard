#!/usr/bin/env python3
import subprocess
import os
import sys
import time
import signal

env = os.environ.copy()
home = os.path.expanduser("~")
fnm_dir = os.path.join(home, ".local/share/fnm")
env["PATH"] = f"{fnm_dir}:{home}/.local/share/fnm/current/bin:{home}/.local/share/fnm/aliases/default/bin:{env.get('PATH', '')}"

cwd = "/home/karthik/Desktop/vibecode/governance-dashboard"
log_path = os.path.join(cwd, "server.log")

log_file = open(log_path, "a", buffering=1)

# Ignore SIGPIPE so writes never crash
signal.signal(signal.SIGPIPE, signal.SIG_IGN)

# Spawn Next.js dev server with stdout/stderr directed to file and persistent stdin
proc = subprocess.Popen(
    ["node", "node_modules/next/dist/bin/next", "dev", "-p", "3000", "-H", "0.0.0.0"],
    cwd=cwd,
    stdin=subprocess.PIPE,
    stdout=log_file,
    stderr=log_file,
    text=True,
    env=env,
)

def handle_sig(sig, frame):
    proc.terminate()
    log_file.close()
    sys.exit(0)

signal.signal(signal.SIGTERM, handle_sig)
signal.signal(signal.SIGINT, handle_sig)

log_file.write(f"\n[Daemon] Next.js dev server started with PID {proc.pid}\n")
log_file.flush()

while proc.poll() is None:
    time.sleep(1)

log_file.write(f"\n[Daemon] Next.js exited with code {proc.returncode}\n")
log_file.close()
sys.exit(proc.returncode)
