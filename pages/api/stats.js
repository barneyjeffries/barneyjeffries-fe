import stats from '../../data/stats.json';

export default function handler(req, res) {
    res.status(200).json(stats.data)
}

