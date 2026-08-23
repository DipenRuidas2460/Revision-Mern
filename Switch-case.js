function checkingFruit(fruit) {
    switch (fruit) {
        case 'apple':
            console.log('The fruit is an apple.');
            break;
        case 'banana':
            console.log('The fruit is a banana.');
            break;
        case 'cherry':
            console.log('The fruit is a cherry.');
            break;
        default:
            console.log('The fruit is not recognized.');
    }
}

checkingFruit('cherry')