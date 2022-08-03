import stats from '../../data/stats.json';

// const handler = nc()
    // use connect based middleware
    // .use(cors())
    // .post(async (req, res) => {
    //     const response = await fetch('https://wakatime.com/share/@3e8fbf40-286b-4840-a1ad-60245b86b323/3ac817d9-f38d-4fac-9bb7-dac060a09b52.json', config);
    //     res.json(response);
    // });

export default function handler(req, res) {
    res.status(200).json(stats.data)
}

