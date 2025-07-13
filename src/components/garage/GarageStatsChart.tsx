//import styles from '@/styles/garage/GarageStatsChart.module.scss';
import { BarChart, Bar, XAxis, ResponsiveContainer, YAxis, LabelList } from 'recharts';
import { backgrounds } from '@/components/textContent/GarageSectionTexts';

export default function MyStatsChart({ stats, motoId, showHistory, historyText }) {
  if (!stats || stats.length === 0) return <p>No stats available</p>;

  const normalizedData = stats.map(stat => ({
    name: stat.name.replace(' ', '\u00A0'),
    value: (stat.value / stat.max) * 100,
    max: 100,
    displayValue: `${stat.value} ${stat.unit}`,
  }));

  return (
    <div
      className={styles.chartContainer}
      style={{ background: backgrounds[motoId] || backgrounds.m01 }}
    >
      <h3 className={styles.chartTitle}>{showHistory ? 'History' : 'Stats'}</h3>
      <div className={styles.chartHeader}></div>

      <div className={styles.chartContent}>
        {showHistory ? (
          <div className={styles.historyText}>
            <p>{historyText}</p>
          </div>
        ) : (
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={normalizedData} layout="vertical" margin={{ left: 120, right: 120 }}>
              <XAxis type="number" domain={[0, 100]} hide />
              <YAxis
                dataKey="name"
                type="category"
                tick={{ fill: 'white', fontSize: 20 }}
                width={20}
                letterSpacing={2}
                axisLine={false}
                tickLine={false}
                dy={-15}
              />
              <Bar
                dataKey="value"
                fill="white"
                barSize={18}
                radius={[0, 10, 10, 0]}
                background={{ fill: 'rgba(255, 255, 255, 0.2)', radius: [0, 10, 10, 0] }}
              />
              <Bar dataKey="max" fill="transparent" barSize={20}>
                <LabelList
                  dataKey="displayValue"
                  position="right"
                  fill="white"
                  fontSize={20}
                  letterSpacing={2}
                  dy={-25}
                  offset={30}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
}
