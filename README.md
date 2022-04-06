# DisableCtrlC
This example ensures that the Ctrl+C shortcut for Dynamics 365 Business Central prevents copying in lists.

# Control Add-in
First we start by creating a control addin. In the example, this file is named DisableCtrlC.al
We create the JsScript folder and create a javascript file with the name Start.js

# Page Extension
We create an extension from the list page where we will add the Control Addin. In the example, this is the Contact List page with the name ContactList.PageExt.al.
I preferred to add it at the end of the content. That's all, it will no longer be possible to copy from your list page with the ctrl+c shortcut.

# PS
<N> lines copied message will appear on the screen, but when you paste it, you will see that there is no data.
  
  #Microsoft #Dynamics365 #BusinessCentral #DisableCtrlC
