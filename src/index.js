module.exports = function toReadable(number) {
    let tenths = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ]
    let hundredths = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    const numeral_system = String(number).split('')
    return (
        number < 20 ? tenths[number] :

        number < 100 && numeral_system[1] === '0' ? `${hundredths[numeral_system[0] - 2]}` :
        number < 100 ? `${hundredths[numeral_system[0] - 2]} ${tenths[numeral_system[1]]}` :

        number < 1000 && numeral_system[1] === '0' && numeral_system[2] === '0' ? `${tenths[numeral_system[0]]} hundred` :
        number < 1000 && numeral_system[1] <= '1' ? `${tenths[numeral_system[0]]} hundred ${tenths[Number(numeral_system.slice(1, numeral_system.length).join(''))]}` :
        number < 1000 && numeral_system[2] === '0' ? `${tenths[numeral_system[0]]} hundred ${hundredths[numeral_system[1] - 2]}` :
        number < 1000 ? `${tenths[numeral_system[0]]} hundred ${hundredths[numeral_system[1] - 2]} ${tenths[numeral_system[2]]}` : 'please enter a number from 1 to 999'

    )
}