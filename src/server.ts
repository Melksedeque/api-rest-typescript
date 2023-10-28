interface User {
    birthDate: number
}

function calculateAge(user: User): number {
    return new Date().getFullYear() - user.birthDate
}

const user1: User = {
    birthDate: 1991
}
console.log(calculateAge(user1))