export const ROLES = Object.freeze({
    user: "User",
    manager: "Manager",
    admin: "Admin"
})

export const DASH_REGEX     = /^\/dash(\/)?$/
export const USR_REGEX      = /^\/dash\/users(\/)?$/
export const USER_REGEX     = /^[A-z0-9]{3,20}$/
export const PWD_REGEX      = /^[A-z0-9!@#$%]{4,12}$/
export const EMAIL_REGEX    = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/