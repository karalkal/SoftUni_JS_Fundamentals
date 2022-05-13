function calculateHoursToRead(pagesTotal, speedPerHour, daysAvailable) {
    let totalHoursRequired = pagesTotal / speedPerHour
    let dailyRequirement = totalHoursRequired / daysAvailable
    // console.log(`Total time to read the book: ${pagesTotal} pages / ${speedPerHour} pages per hour = ${totalHoursRequired} hours`);
    // console.log(`Required hours per day: ${totalHoursRequired} hours / 2 days = ${dailyRequirement} hours per day`);
    console.log(dailyRequirement)
}

calculateHoursToRead(212, 20, 2)
calculateHoursToRead(432, 15, 4)