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

status_1 = document.querySelectorAll('#book1 .status')[0];
reserve_1 = document.querySelectorAll('#book1 .reserve')[0];
checkout_1 = document.querySelectorAll('#book1 .checkout')[0];
checkin_1 = document.querySelectorAll('#book1 .checkin')[0];

status_2 = document.querySelectorAll('#book2 .status')[0];
reserve_2 = document.querySelectorAll('#book2 .reserve')[0];
checkout_2 = document.querySelectorAll('#book2 .checkout')[0];
checkin_2 = document.querySelectorAll('#book2 .checkin')[0];

status_3 = document.querySelectorAll('#book3 .status')[0];
reserve_3 = document.querySelectorAll('#book3 .reserve')[0];
checkout_3 = document.querySelectorAll('#book3 .checkout')[0];
checkin_3 = document.querySelectorAll('#book3 .checkin')[0];

checkin_1.style.color = 'black'
status_1.style.color = STATUS_MAP.overdue.color;
reserve_1.disabled =  !STATUS_MAP.overdue.canReserve
checkout_1.disabled = !STATUS_MAP.overdue.canCheckout
checkin_1 = STATUS_MAP.overdue.color ? 'enabled' : 'disabled'

checkin_2.style.color = 'black'
status_2.style.color = STATUS_MAP.reserved.color
reserve_2.disabled = !STATUS_MAP.reserved.canReserve
checkout_2 = STATUS_MAP.reserved.canCheckout ? 'enabled' : 'disabled'
checkin_2.disabled = !STATUS_MAP.reserved.canCheckIn

checkin_3.style.color = 'black'
status_3.style.color = STATUS_MAP.shelf.color
reserve_3 = STATUS_MAP.shelf.canReserve ? 'enabled' : 'disabled'
checkout_3 = STATUS_MAP.shelf.canCheckout ? 'enabled' : 'disabled'
checkin_3.disabled = !STATUS_MAP.shelf.canCheckIn