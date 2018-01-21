class Driver {
  constructor(name, startdate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(endDate) {
    return endDate - this.startDate.getUTCFullYear() -1
  }
}
