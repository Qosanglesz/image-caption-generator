# Image Caption Generator

An AI-powered web application that generates captions for images using Hugging Face's BLIP model. Built with **Next.js App Router** and **Hugging Face API**.

## 🚀 Features
- 📷 Upload an image
- 🤖 Generate AI-powered captions
- ⚡ Built with **Next.js 15 (App Router)**
- 🌐 Uses Hugging Face's **BLIP model**

## 📸 Demo
![Demo Screenshot](demo.png)

## 🛠️ Installation

```sh
# Clone the repository
git clone https://github.com/qosanglesz/image-caption-generator.git
cd image-caption-generator

# Install dependencies
npm install

# Start the development server
npm run dev
```

Now open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔑 Environment Variables
Create a `.env.local` file and add your **Hugging Face API key**:

```env
NEXT_PUBLIC_HF_TOKEN = "your_huggingface_api_key"
```

## 📂 Project Structure
```
image-caption-generator/
├── app/
│   ├── api/
│   │   └── caption/
│   │       └── route.ts    # API endpoint for image captioning
│   ├── page.tsx            # Main frontend page
│   ├── layout.tsx          # Layout component
├── public/
│   └── demo.png            # Screenshot for README
├── .env.local               # Environment variables
├── package.json             # Dependencies
└── README.md                # Documentation
```

## 🖼️ Usage
1. **Upload an image**
2. **Click "Generate Caption"**
3. **Wait for AI to generate a caption**
4. **See the result below the image**

## 📜 API Endpoint

- **Endpoint:** `POST /api/caption`
- **Request:**
    - `image: File (image/*)`
- **Response:**
  ```json
  {
    "caption": "A cat sitting on a table."
  }
  ```

## 📦 Dependencies
- **Next.js** (App Router)
- **Axios** (API requests)
- **Multer** (File upload handling)

## 📝 License
MIT License

---
### 🌟 Star the repo if you found it useful! 🚀

