const input = '64,120 '

function writeOutput(arr) {
    arr = arr.toLowerCase().split('=')
    console.log(arr)
    let s = arr[1].split(' ')[0]
    let t = arr[2].split(' ')
    console.log(s)
    console.log(t)
    let res = []
    t.forEach(element => {
        element = element.toLowerCase()
        if (s.includes(element)) {
            console.log(true)
        } else {
            console.log(false)
        }
    });
    return res
}

//console.log(writeOutput(input))