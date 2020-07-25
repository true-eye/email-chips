`AspireIQ Take Home Project`

This component should enable the user to input multiple email addresses to which they want to send an email message by typing the email address and hitting the Enter or Tab button. It should allow the user to delete a previously entered email address. And if the user enters an invalid email address, it should display an error indicator to the user.

`My suggestions to improve the feature & UI/UX of this component`

- Features

1. Email address lowercase : This is pretty easy by using .lowercase()
2. Email duplication: If the user enters the emails which is already existed in the list, we can prevent to add it. : This is also easy.

- UI/UX

1. Auto-suggestion: When a user is typing the address, we can show the suggestion menu under input to select.
2. Drag and Drop: A user can drag and drop each item to move and insert.
3. Vertical scrollbar style customization: when a user enters many email address, it will overflow the vertical height. Right now, I set the maximum row count as 3 and shows a vertical scrollbar if overflows. Its UI is not good for production, so we can improve it.
