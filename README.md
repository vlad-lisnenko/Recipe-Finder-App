# Recipe Finder App

## Overview

The Recipe Finder App is a web application that allows users to search for recipes by name, cuisine, and preparation time. It provides detailed information about each recipe, including ingredients, preparation time, servings, and more. This app uses the **Spoonacular API** for fetching recipe data and implements **Next.js** for server-side rendering and routing.

### Features

- **Search Recipes**: Users can search for recipes based on different parameters like name, cuisine, and preparation time.
- **Recipe Details**: Click on any recipe to view detailed information, including ingredients, preparation time, servings, and a summary.
- **Skeleton Loading**: A skeleton screen is shown while the data is loading to improve the user experience.
- **Responsive Design**: The app is fully responsive and optimized for both desktop and mobile devices.
- **Error Handling**: Displays appropriate error messages if there is an issue with fetching data from the API.

---

## Requirements

Before you can run this application, make sure you have the following installed:

- **Node.js** (v16 or higher)
- **npm**(package managers)

---

## Setup Instructions

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/recipe-finder-app.git
```

### 2. Install Dependencies

Navigate to the project folder and install the required dependencies:

```bash
cd recipe-finder-app
npm install
```

### 3. Setup API Key

To fetch recipes from the Spoonacular API, you need to set up an API key

1. Go to Spoonacular API and create an account to get your API key.

2. Create(or change) a .env.local file in the root of the project and add the following line:

```bash
SPOONACULAR_API_KEY=your-api-key
```

Make sure to replace your-api-key with your actual Spoonacular API key.

## 4. Run the Development Server

Now that you've installed the dependencies and set up the API key, you can run the app in development mode:

```bash
npm run dev
```

This will start the Next.js development server, and you can access the app at http://localhost:3000 in your browser.
