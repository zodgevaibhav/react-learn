from flask import Flask, request, jsonify, render_template
from openai import OpenAI
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# OpenAI client
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

# In-memory conversation history (for demo purposes)
# In production, you may want to store per-user sessions in a database
conversation_history = []

# ---- Helper Functions ---- #

def generate_text_with_history(prompt):
    """
    Generate text using GPT-4o-mini, including conversation history.
    """
    # Add user's latest prompt to history
    conversation_history.append({"role": "user", "content": prompt})

    # Call OpenAI API with full conversation
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=conversation_history,
        max_tokens=300
    )

    assistant_message = response.choices[0].message.content

    # Append assistant response to history
    conversation_history.append({"role": "assistant", "content": assistant_message})

    return assistant_message

@app.route("/clear",methods=["GET"])
def clear_history():
    conversation_history.remove
    return jsonify({"result": "Success"})

@app.route("/generate", methods=["POST"])
def generate():
    """
    Accept JSON:
    {
        "prompt": "...",
        "type": "text|image|audio|video"
    }
    """
    data = request.get_json()
    prompt = data.get("prompt", "").strip()
    gen_type = data.get("type", "text")

    if not prompt:
        return jsonify({"error": "Prompt required"}), 400

    try:
        if gen_type == "text":
            result = generate_text_with_history(prompt)
        elif gen_type == "image":
            # Optional: keep history or not
            result = generate_image(prompt)
        elif gen_type == "audio":
            result = generate_audio(prompt)
        elif gen_type == "video":
            result = generate_video(prompt)
        else:
            return jsonify({"error": "Invalid type"}), 400

        return jsonify({"result": result})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

# ---- Existing media generators ---- #

def generate_image(prompt):
    response = client.images.generate(
        model="gpt-image-1",
        prompt=prompt,
        size="1024x1024"
    )
    return response.data[0].url

def generate_audio(prompt):
    os.makedirs("static", exist_ok=True)
    filename = "static/output.mp3"
    response = client.audio.speech.create(
        model="gpt-4o-mini-tts",
        voice="alloy",
        input=prompt
    )
    response.stream_to_file(filename)
    return filename

def generate_video(prompt):
    os.makedirs("static", exist_ok=True)
    return "static/sample_video.mp4"

# ---- Run server ---- #

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5400, debug=True)
