// SVG IMPORTS
import dashboard from "../svg/dashboard.svg";
import header from "../svg/header.svg";
import message from "../svg/message.svg";
import products from "../svg/products.svg";
import settings from "../svg/settings.svg";
import split_expand from "../svg/split-expand.svg";
import analytics from "../svg/analytics.svg";
import avatar from "../svg/avatar.svg";
import notification from "../svg/notification.svg";

export const sidebarHeader = {
     text: 'Shopping',
     icon: header,
}

export const sidebar = [
     {
          icon: dashboard,
          text: 'Dashboard',
          link: '/',
     },{
          icon: analytics,
          text: 'Analytics',
          link: '/Analytics',
     },{
          icon: products,
          text: 'Product',
          link: '/Prods',
     },{
          icon: message,
          text: 'Messages',
          link: '/Messages',
     },{
          icon: settings,
          text: 'Settings',
          link: '/Settings',
     }
]

export const sidebarFooter = {
     user: avatar,
     icon: split_expand,
     text: 'Jude',
}

export const TopBarNotifIcon = {
     icon: notification,
     text: 'Notifications',
};

export const TopBarAvatar = {
     icon: avatar,
     text: 'Jude',
}

export const SidebarWidths = {
     min: '80px',
     max: '218px',
}
