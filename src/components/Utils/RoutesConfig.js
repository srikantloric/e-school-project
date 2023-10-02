import Dashboard from "../../pages/Dashboard/Dashboard";
import Students from "../../pages/Users/Students";
import Faculties from "../../pages/Users/Faculties";
import Attendance from "../../pages/Attendance/Attendance";
import { IconCoinRupee, IconDashboard, IconFingerprint, IconFriends, IconMail, IconNotes, IconPoint, IconReceipt2, IconUsers } from "@tabler/icons-react";
import AddStudent from "../../pages/Users/AddStudent";
export const routesConfig =
    [
        {
            title: "Masters",
            isHeader: true
        },
        {
            title: "Dashboard",
            to: "/",
            icon: IconDashboard,
            isCollapsable: false,
            isHeader: false,
            Component: Dashboard,
          
        },
        {
            title: "Students",
            to: "/Students",
            icon: IconFriends,
            isCollapsable: false,
            isHeader: false,
            Component: Students,
            childrens: [{
                title: "Add Student",
                to: "/add-students",
               
                isCollapsable: false,
                isHeader: false,
                Component: <AddStudent/>,
            }, {
                title: "View Student",
                to: "/view-students",
                isCollapsable: false,
                isHeader: false,
                Component: <AddStudent/>,
            }]
        },
        {
            title: "Faculties",
            to: "/Faculties",
            icon: IconUsers,
            isCollapsable: false,
            isHeader: false,
            Component: Faculties,
      
        },
        {
            title: "Management",
            isHeader: true
        },
        {
            title: "Attendance",
            to: "/Attendance",
            icon: IconFingerprint,
            isCollapsable: false,
            isHeader: false,
            Component: Attendance,
          
        },
        {
            title: "Fee Payment",
            to: "/FeeManagement",
            icon: IconCoinRupee,
            isCollapsable: false,
            isHeader: false,
            Component: Attendance,
            
        },
        {
            title: "Fee Receipt",
            to: "/FeeReceipt",
            icon: IconNotes,
            isCollapsable: false,
            isHeader: false,
            Component: Attendance,
 
        },
        {
            title: "Notification",
            isHeader: true
        },
        {
            title: "Transaction",
            to: "/Transaction",
            icon: IconReceipt2,
            isCollapsable: false,
            isHeader: false,
            Component: Attendance,
           
        },
        {
            title: "Message",
            to: "/Message",
            icon: IconMail,
            isCollapsable: false,
            isHeader: false,
            Component: Attendance,
            
        },
        {
            title: "Message",
            to: "/Message",
            icon: IconMail,
            isCollapsable: false,
            isHeader: false,
            Component: Attendance,
    
        },
        {
            title: "Message",
            to: "/Message",
            icon: IconMail,
            isCollapsable: false,
            isHeader: false,
            Component: Attendance,
         
        },
        {
            title: "Message",
            to: "/Message",
            icon: IconMail,
            isCollapsable: false,
            isHeader: false,
            Component: Attendance,
          
        },
    ];
   