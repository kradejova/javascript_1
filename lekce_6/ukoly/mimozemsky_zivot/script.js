const datum = dayjs("2000-07-28")
const soucasneDatum = dayjs()
const msg = document.getElementById("msg")

if (soucasneDatum.isBefore(datum)) {
    msg.textContent = "Jeste nenastala apokalypsa."
} else {
    msg.textContent = "Apokalypsa uz nastala a jsme v riti."
}