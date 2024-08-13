function getAction(role: string): string {
    let action: string;

    switch (role) {
        case 'admin':
            action = 'Access to admin dashboard';
            break;
        case 'editor':
            action = 'Access to content editor';
            break;
        case 'viewer':
            action = 'View content only';
            break;
        case 'guest':
            action = 'Limited access, login to get more features';
            break;
        default:
            action = 'Role not recognized';
            break;
    }

    return action;
}

console.log(getAction('admin'));  
console.log(getAction('editor')); 
console.log(getAction('viewer')); 
console.log(getAction('guest'));  
console.log(getAction('unknown')); 
