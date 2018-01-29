import React from 'react'
import { connect } from 'react-fela'
import Link from 'gatsby-link'

const Header = ({ styles }) => (
  <div className={styles.header}>
    <div className={styles.bar}>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          className={styles.link}
        >
          Gatsby
        </Link>
      </h1>
    </div>
  </div>
)

const header = (props) => ({
  background: props.theme.color,
  marginBottom: '1.45rem',
})

const bar = () => ({
  margin: '0 auto',
  maxWidth: 960,
  padding: '1.45rem 1.0875rem',
})

const link = () => ({
  color: 'white',
  textDecoration: 'none',
})

export default connect({
  header,
  bar,
  link,
})(Header)
