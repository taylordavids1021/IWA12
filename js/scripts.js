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

status_1 = document.querySelectorAll('#book1 .status')
reserve_1 = document.querySelectorAll('#book1 .reserve')
checkout_1 = document.querySelectorAll('#book1 .checkout')
checkin_1 = document.querySelectorAll('#book1 .checkin')

status_2 = document.querySelectorAll('#book2 .status')
reserve_2 = document.querySelectorAll('#book2 .reserve')
checkout_2 = document.querySelectorAll('#book2 .checkout')
checkin_2 = document.querySelectorAll('#book2 .checkin')

status_3 = document.querySelectorAll('#book3 .status')
reserve_3 = document.querySelectorAll('#book3 .reserve')
checkout_3 = document.querySelectorAll('#book3 .checkout')
checkin_3 = document.querySelectorAll('#book3 .checkin')

checkin_1.style.color = none
status_1.style.color = STATUS_MAP.status.color
reserve_1 = STATUS_MAP.status.canReserver ? enabled : disabled
checkout_1 = STATUS_MAP.status.canCheckout ? enabled : disabled
checkin_1 = STATUS_MAP.status.canCheckIn ? enabled : disabled

checkin_2.style.color = none
status_2.style.color = STATUS_MAP.status.color
reserve_2 = STATUS_MAP.status.canReserver ? enabled : disabled
checkout_2 = STATUS_MAP.status.canCheckout ? enabled : disabled
checkin_2 = STATUS_MAP.status.canCheckIn ? enabled : disabled

checkin_3.style.color = none
status_3.style.color = STATUS_MAP.status.color
reserve_3 = STATUS_MAP.status.canReserver ? enabled : disabled
checkout_3 = STATUS_MAP.status.canCheckout ? enabled : disabled
checkin_3 = STATUS_MAP.status.canCheckIn ? enabled : disabled