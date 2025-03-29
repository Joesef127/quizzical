## **Quizzical 🎯 - A Fun Trivia Game**
[![Live Demo](https://img.shields.io/badge/Live-Demo-green)](https://hive-quizzical.vercel.app/)  
A trivia-based quiz app that fetches questions from the **Trivia API**, allowing users to test their knowledge on various topics. Users can select answers, check their score, and see which answers were correct or incorrect.


## **📌 Features**
- 🎲 **Randomized Questions & Answers**  
- ✅ **Interactive Answer Selection**  
- 📊 **Score Calculation & Result Display**  
- 🎨 **Clean & Responsive UI**  


## **🚀 Live Demo**
🔗 **[Quizzical Live](https://hive-quizzical.vercel.app/)**  
Try the quiz online and see how well you score!


## **📂 Project Structure**
```
quizzical
│── public/
│── src/
│   ├── components/
│   │   ├── Question.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   ├── Index.css
│   ├── Intro.jsx
│── package.json
│── README.md
```

- **App.jsx** → Handles fetching quiz data and managing user interaction.
- **Question.jsx** → Renders each question and its answer choices.
- **App.css** → Contains styling for the UI.

---

## **🛠 Tech Stack**
- **React.js** (Frontend Framework)  
- **Trivia API** (Question Source)  
- **CSS** (Styling)

## **📥 Installation**
Follow these steps to set up the project locally:

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/Joesef127/quizzical.git
cd quizzical
```

### **2️⃣ Install Dependencies**
```bash
npm install
```

### **3️⃣ Start the Development Server**
```bash
npm run dev
```
Then open **`http://localhost:5173/`** in your browser.

## **📡 API Integration**
This project fetches questions from **The Trivia API** using the following endpoint:
```bash
https://the-trivia-api.com/v2/questions
```
Data is retrieved asynchronously and stored in state.

## **🎮 How to Play**
1. Click on an answer for each question.
2. Press **"Check Answers"** to see your score.
3. Correct answers turn **green**, incorrect answers turn **red**.
4. Try again to improve your score!

## **📌 Future Improvements**
- 🔄 Add a **"Play Again"** button  
- 🎭 Add **difficulty levels**  
- 📊 Save **high scores** to local storage  


## **📜 License**
This project is **open-source** and free to use.

## **📞 Contact**
For issues or contributions, reach out:  
📧 **Email:** Adegboladayor@gmail.com  
🐙 **GitHub:** [Joesef127](https://github.com/Joesef127)  
