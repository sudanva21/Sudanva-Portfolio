# Web3Forms Setup Instructions

Follow these steps to enable contact form submissions to your email (sudanva7@gmail.com):

## Step 1: Get Your Access Key

1. Visit https://web3forms.com
2. Enter your email: **sudanva7@gmail.com**
3. Click "Create Access Key"
4. Check your email inbox for the verification email
5. Copy the access key provided

## Step 2: Add Access Key to Your Project

1. Open the `.env` file in your project root
2. Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual access key:
   ```
   VITE_WEB3FORMS_ACCESS_KEY=your_actual_access_key_here
   ```
3. Save the file

## Step 3: Restart Development Server

If your dev server is running, restart it:
```bash
npm run dev
```

## Step 4: Test the Form

1. Go to http://localhost:3001/contact
2. Fill out the form and submit
3. Check sudanva7@gmail.com for the message

## Important Notes

- The `.env` file is gitignored - never commit it
- Messages will be sent to: sudanva7@gmail.com
- Web3Forms free tier: 250 submissions/month
- No backend required - all handled by Web3Forms API

## Files Modified

- `src/pages/Contact.jsx` - Updated form submission handler
- `.env` - Contains your access key (keep private)
- `.env.example` - Template for environment variables
