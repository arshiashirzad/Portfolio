import { useEffect } from 'react'

const usePageTitle = (title, description) => {
  useEffect(() => {
    // Update page title
    document.title = title ? `${title} | Arshia Shirzad` : 'Arshia Shirzad - Back-End Developer Portfolio'
    
    // Update meta description
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]')
      if (metaDescription) {
        metaDescription.setAttribute('content', description)
      } else {
        metaDescription = document.createElement('meta')
        metaDescription.name = 'description'
        metaDescription.content = description
        document.head.appendChild(metaDescription)
      }
    }
  }, [title, description])
}

export default usePageTitle

