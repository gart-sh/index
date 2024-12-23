import { projects, Project } from "./assets/projects"
import { languages } from "./assets/languages"

const projctListElement = document.getElementById('project-list')! as HTMLDivElement
const projectTemplateElement = document.getElementById('card-template')! as HTMLTemplateElement

const delay = 50

projects.forEach(addProject)

function addProject(project: Project, index: number) {
    const newProject = projectTemplateElement.cloneNode(true) as HTMLDivElement

    const timestampElement = newProject.querySelector('.card-timestamp')! as HTMLDivElement
    const nameElement = newProject.querySelector('.card-title')! as HTMLHeadingElement
    const descriptionElement = newProject.querySelector('.card-description')! as HTMLParagraphElement
    const linkElement = newProject.querySelector('.card-links')! as HTMLAnchorElement
    const languageElement = newProject.querySelector('.card-langs')! as HTMLDivElement

    timestampElement.textContent = project.date
    nameElement.textContent = project.name
    descriptionElement.textContent = project.description

    project.links.forEach(link => {
        const newLink = document.createElement('a')
        newLink.className = 'card-link'
        newLink.setAttribute('href', link.url)
        newLink.setAttribute('target', '_blank')
        newLink.setAttribute('rel', 'noopener noreferrer')

        const buttonElement = document.createElement('button')
        buttonElement.textContent = link.name

        newLink.appendChild(buttonElement)
        linkElement.appendChild(newLink)
    })

    project.languages.forEach(langName => {
        const lang = languages[langName]

        const langElement = document.createElement('img')
        langElement.setAttribute('src', `https://cdn.simpleicons.org/${lang.icon}`)
        languageElement.appendChild(langElement)
    })

    newProject.removeAttribute('hidden')
    newProject.removeAttribute('id')

    newProject.style.animation = `fadeIn 0.5s ease ${index * delay}ms forwards`

    projctListElement.appendChild(newProject)
}

projectTemplateElement.remove()
