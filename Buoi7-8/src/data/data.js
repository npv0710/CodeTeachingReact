const persons = [
    {
        id: 1,
        firstName: 'Nguyen Quang',
        lastName: 'Hai',
        username: 'quanghai'
    },
    {
        id: 2,
        firstName: 'Nguyen Cong',
        lastName: 'Phuong',
        username: 'congphuong'
    },
    {
        id: 3,
        firstName: 'Nguyen Tuan',
        lastName: 'Anh',
        username: 'tuananh'
    }
]

const menuLinks = [
    {
        text: 'User Info',
        link: '/user-info',
        icon: 'fa-solid fa-user'
    },
    {
        text: 'List Groups',
        link: '/list-groups',
        icon: 'fa-solid fa-layer-group'
    },
    {
        text: 'Change Password',
        link: '/password-changin',
        icon: 'fas fa-user-lock'
    },
    {
        text: 'Settings',
        link: '/Settings',
        icon: 'fa-solid fa-gear'
    },
]

export {
    persons, 
    menuLinks
}