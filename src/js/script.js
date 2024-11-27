// *** ACCORDEON ***

const accordeon = document.querySelectorAll('.accordeon');

if accordeon{
    accordeon.querySelectorAll("details").forEach((details) => {
        details.open = false;
    });
}