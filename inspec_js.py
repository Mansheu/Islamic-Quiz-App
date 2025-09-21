from pathlib import Path
import sys
import re

def inspect_function(path="script.js", func_name="showQuestion", context_chars=400, encoding="utf-8"):
    p = Path(path)
    if not p.exists():
        print(f"File not found: {path}")
        return 2

    raw = p.read_bytes()
    try:
        text = raw.decode(encoding)
    except UnicodeDecodeError:
        print(f"Failed to decode {path} using {encoding}. Showing raw bytes instead.")
        text = raw.decode(encoding, errors="replace")

    # flexible regex to handle optional whitespace and params
    pattern = re.compile(rf"(function\s+{re.escape(func_name)}\s*\([^)]*\)\s*\{{)", re.I)
    m = pattern.search(text)
    if not m:
        print(f"Function `{func_name}` not found in {path}.")
        return 1

    start_index = m.start()
    # compute line number
    line_number = text.count("\n", 0, start_index) + 1

    start_context = max(0, start_index - context_chars//2)
    end_context = start_index + context_chars//2

    snippet = text[start_context:end_context]
    # show a small marker where the function starts
    marker_pos = start_index - start_context
    print(f"Found `{func_name}` at line {line_number} (char index {start_index}) in {path}\n")
    print(snippet[:marker_pos] + ">>>[HERE]>>>" + snippet[marker_pos:])
    return 0

if __name__ == "__main__":
    # optional CLI: python inspec_js.py [script.js] [functionName] [contextChars]
    args = sys.argv[1:]
    path = args[0] if len(args) >= 1 else "script.js"
    func = args[1] if len(args) >= 2 else "showQuestion"
    chars = int(args[2]) if len(args) >= 3 else 400
    sys.exit(inspect_function(path, func, chars))