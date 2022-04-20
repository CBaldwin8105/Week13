var maybe = 0

function run() {
    let h = document.getElementById("hscore");
    var number = getCardHuman()
    maybe += number
    h.innerHTML = "The card was " + number + ". Your total is " + maybe + "."
}

function humanChange() {
    let h = document.getElementById("hscore");
    var number = getCardHuman()
    maybe += number
    h.innerHTML = "The card was " + number + ". Your total is " + maybe + "."
}

function getCardHuman() {
    var num = Math.floor(Math.random() * 10) + 1
    var suitArray = ["C", "D", "H", "S"]
    var randomSuit = Math.floor(Math.random() * 4)
    document.getElementById("cardh").insertAdjacentHTML("beforeend", "<img src=images/" + num + suitArray[randomSuit] + ".jpg>")
    return num
}

function getCardComp() {
    var num = Math.floor(Math.random() * 10) + 1
    var suitArray = ["C", "D", "H", "S"]
    var randomSuit = Math.floor(Math.random() * 4)
    document.getElementById("cardc").insertAdjacentHTML("beforeend", "<img src=images/" + num + suitArray[randomSuit] + ".jpg>")
}

function user(number) {

    var user = 0


    do {
        var number = randNum()

        if (number == 1) {
            var eleven = 11
            number = eleven
        }

        user += (number)

        if ((user > 20) && (eleven == 11)) {
            user -= 10
            eleven = 0
        }

        if (user > 20) {
            break;
        }

    } while (document.getElementById('draw').clicked == true)

    return user
}

    function comp() {

        var comp = 0

        do {

            var number = randNum()

            if (number == 1) {
                var eleven = 11
                number = eleven
            }

            comp += (number)

            if ((comp > 20) && (eleven == 11)) {
                comp -= 10
                eleven = 0
            }

            alert(`The new number is ${number}.
                
            Computer Total: ${comp}.`)
                
        } while (comp < 16)

        alert(`Computer will stop at ${comp}.`)

        return comp
    }

    function compare(user, comp) {
        if (comp > 20) {
            alert(`The computer went over 20! You won!`)
        } else if (user > 20) {
            alert(`You went over 20! The computer won!`)
        } else if (user > comp) {
            alert(`You won!`)
        } else if (comp > user) {
            alert(`The computer won!`)
        } else {
            alert(`You tied! No points awarded.`)
        }

        var nothing = 0

        return nothing
}

function master() {
    do {
        compare(user(), comp())
        
        var quit = prompt("Do you want to play again? Type 'n' if not.")
    } while (quit != "n")
}