function printTypeAndMessage(message) {
    type = typeof (message)
    console.log(type);
    if (type === 'string' || type === 'number') {
        console.log(message)
    }
    else {
        console.log('Parameter is not suitable for printing')
    }
}

printTypeAndMessage("Oppa")
printTypeAndMessage(null)