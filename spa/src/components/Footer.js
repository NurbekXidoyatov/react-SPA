import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer class="page-footer">
        <div class="footer-copyright">
          <div class="container">
          © {new Date().getFullYear()} Copyright Text
          <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
