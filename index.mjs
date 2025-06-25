import jsonfile from 'jsonfile';
import moment from 'moment';
import simplegit from 'simple-git';

const FILE_PATH = './data.json';

const getRandomDateBetween = (start, end) => {
    const startDate = moment(start);
    const endDate = moment(end);
    const randomDate = moment(startDate).add(Math.random() * (endDate - startDate), 'milliseconds');
    return randomDate.format();
}

const startDate = '2025-01-05'; // Start date
const endDate = '2025-06-25'; // End date

const makecommit = n => {

    if (n === 0) return simplegit().push();

    const DATE = getRandomDateBetween(startDate, endDate);

    const data = {
        date: DATE
    }

    console.log(DATE);

    jsonfile.writeFile(FILE_PATH, data, () => {
        simplegit().add([FILE_PATH]).commit(DATE, { '--date': DATE }, makecommit.bind(this, --n));
    });

}

makecommit(264);
