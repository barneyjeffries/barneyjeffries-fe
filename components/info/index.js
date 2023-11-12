import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Info() {

    const { data, error } = useSWR('/api/stats', fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    const getOthers = (data) => {
        const others = data.filter(d => d.name === 'JSON' || d.name === 'Markdown' || d.name === 'Other')
        let val = 0;
        others.forEach((o)=>{
            val += o.percent
        })
        return val;
    }

    const [js] = data ? data.filter(d => d.name === 'JavaScript') : null
    const [php] = data ? data.filter(d => d.name === 'PHP') : null
    const [css] = data ? data.filter(d => d.name === 'CSS') : null
    const [html] = data ? data.filter(d => d.name === 'HTML') : null
    const others = data ? getOthers(data) : null

    return (
        <section className="info">
            <div className="info__container">
                <div className="info__section group">
                    <div className="col-3">
                        <h3>Info</h3>
                    </div>
                    <div className="col-9">
                        <p>I am a front-end & web engineer with 20 years experience across a huge range of
                            projects and technologies.</p>
                        <p>I work with agencies, marketing companies and other digital professionals to create highly
                            crafted interactive experiences on mobile, web and tablet.</p>
                        <p>I am currently working as senior front-end engineer for 10up.</p>
                    </div>
                </div>
                <div className="info__section group not-for-mobile">
                    <div className="col-3">
                        <h3>Stats</h3>
                        <p>(Last 7 days)</p>
                    </div>
                    <div className="col-9">
                        <dl className="info__stats">
                            {data && (
                                <>
                                    <dt>PHP</dt>
                                    <dd className="info__stats-php">
                                        {php && (
                                            <>{php.percent}%</>
                                        )}
                                    </dd>
                                    <dt>JS/React</dt>
                                    <dd className="info__stats-js">
                                        {js && (
                                            <>{js.percent}%</>
                                        )}
                                    </dd>
                                    <dt>CSS</dt>
                                    <dd className="info__stats-css">
                                        {css && (
                                            <>{css.percent}%</>
                                        )}
                                    </dd>
                                    <dt>HTML</dt>
                                    <dd className="info__stats-html">
                                        {html && (
                                            <>{html.percent}%</>
                                        )}
                                    </dd>
                                    <dt>Other</dt>
                                    <dd className="info__stats-html">
                                        {others && (
                                            <>{others}%</>
                                        )}
                                    </dd>
                                </>
                            )}
                        </dl>

                        <div id="info__stats-currently-playing">

                        </div>
                    </div>
                </div>
                <div className="info__section group">
                    <div className="col-3">
                        <h3>Contact</h3>
                    </div>
                    <div className="col-9">
                        <ul className="info__contact">
                            <li>07919 008436</li>
                            <li><a href="mailto:info@barneyjeffries.com">info@barneyjeffries.com</a></li>
                            <li><a href="https://www.instagram.com/barneyjeffries/">instagram</a></li>
                        </ul>

                    </div>
                </div>
            </div>
        </section>
    )
}
