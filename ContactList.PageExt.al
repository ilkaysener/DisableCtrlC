pageextension 50047 "ContactList.PageExt" extends "Contact List"
{
    layout
    {
        addlast(content)
        {
            usercontrol(DisableCtrlC; DisableCtrlC)
            {
                ApplicationArea = All;
            }
        }
    }
}
