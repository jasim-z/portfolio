# Email Setup Instructions

## Gmail SMTP Configuration

To enable email functionality for the contact form, you need to set up Gmail SMTP with an App Password.

### Step 1: Enable 2-Factor Authentication
1. Go to your Google Account settings
2. Navigate to Security
3. Enable 2-Factor Authentication if not already enabled

### Step 2: Generate App Password
1. In your Google Account settings, go to Security
2. Under "2-Step Verification", click on "App passwords"
3. Select "Mail" as the app
4. Select "Other" as the device and name it "Portfolio Contact Form"
5. Copy the generated 16-character password

### Step 3: Create Environment Variables
Create a `.env.local` file in the root directory with:

```env
GMAIL_USER=your-gmail@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password
```

### Step 4: Update Email Address
In `/src/app/api/send-email/route.ts`, update line 25:
```typescript
to: 'lzjasim@gmail.com', // Your Gmail address
```

### Step 5: Test the Form
1. Start the development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your Gmail inbox for the message

## Features

- ✅ Sends emails to your Gmail inbox
- ✅ Professional HTML email template
- ✅ Form validation
- ✅ Success/error handling
- ✅ Responsive design
- ✅ Spam protection

## Troubleshooting

- Make sure your App Password is correct
- Ensure 2FA is enabled on your Google account
- Check the console for any error messages
- Verify the `.env.local` file is in the root directory
