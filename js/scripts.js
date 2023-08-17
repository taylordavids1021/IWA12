// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

status_1 = document.querySelector('#book1 .status')
reserve_1 = document.querySelector('#book1 .reserve')
checkout_1 = document.querySelector('#book1 .checkout')
checkin_1 = document.querySelector('#book1 .checkin')

status_2 = document.querySelector('#book2 .status')
reserve_2 = document.querySelector('#book2 .reserve')
checkout_2 = document.querySelector('#book2 .checkout')
checkin_2 = document.querySelector('#book2 .checkin')

status_3 = document.querySelector('#book3 .status')
reserve_3 = document.querySelector('#book3 .reserve')
checkout_3 = document.querySelector('#book3 .checkout')
checkin_3 = document.querySelector('#book3 .checkin')

checkin_1.style.color = none
status.style.color = STATUS_MAP.status.color
reserve = STATUS_MAP.status.canReserver ? enabled : disabled
checkout = STATUS_MAP.status.canCheckout ? enabled : disabled
checkin = STATUS_MAP.status.canCheckIn ? enabled : disabled

checkin.1.color = none
status.1.style.color = STATUS_MAP.status.color
reserve.1 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
checkout.1 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkin.1 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

checkin.2.color = none
status.2.style.color = STATUS_MAP.status.color
reserve.2 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
checkout.2 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkin.2 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'