const cl = console.log

const spinner = document.getElementById('spinner')
const fetchBtn = document.getElementById('fetchBtn')

function snackBar(msg, icon) {
    Swal.fire({
        title: msg,
        icon: icon,
        timer: 3000
    })
}

function fetchProdId () {
    spinner.classList.remove('d-none')

    setTimeout(() => {

        let err = Math.random() > 0.5 ? false : true

        if (!err) {

            cl(`Product ID fetched successfully !!!`)
            fetchProdById()

        } else {

            cl(`Something went wrong while fetching ID !!!`)
            snackBar('Something went wrong while fetching ID !!!', 'error')
            spinner.classList.add('d-none')
        }

    }, 900)
}


function fetchProdById () {

    setTimeout(() => {

        let err = Math.random() > 0.5 ? false : true

        if (!err) {

            cl(`Product data fetched successfully !!!`)
            fetchReviews()

        } else {

            cl(`Something went wrong while fetching Product data !!!`)
            snackBar('Something went wrong while fetching Product data !!!', 'error')
            spinner.classList.add('d-none')
        }

    }, 700)
}

function fetchReviews () {

    setTimeout(() => {

        let err = Math.random() > 0.5 ? false : true

        if (!err) {

            cl(`Product Reviews fetched successfully !!!`)
            snackBar('Product details and reviews fetched successfully !!!', 'success')
            spinner.classList.add('d-none')

        } else {

            cl(`Something went wrong while fetching Product Reviews !!!`)
            snackBar('Something went wrong while fetching Product Reviews !!!', 'error')
            spinner.classList.add('d-none')
        }

    }, 500)
}

fetchBtn.addEventListener('click', fetchProdId)