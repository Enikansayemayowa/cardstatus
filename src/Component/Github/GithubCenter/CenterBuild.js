import React from 'react'
import GithubCenter from './GithubCenter';
import img1 from '../Githubimg/co-authoring.png'
import img2 from '../Githubimg/pr-checks.png'
import img3 from '../Githubimg/syntax-highlighting.png'



const CenterBuild = () => {
    return (
        <div>
         <GithubCenter
        //  chn
         img = {img1}
         paragraph = "Attribute commits with collaborators easily"
         text = "Quickly add co-authors to your commit. Great for pairing and excellent for sending a little love/credit to that special someone who helped fix that gnarly bug of yours. See the attribution on the history page, undo an accidental attribution, and see the co-authors on github.com" />
         <GithubCenter 
         chn
         img ={img2}
         paragraph = "Checkout branches with pull requests and view CI statuses"
         text ="See all open pull requests for your repositories and check them out as if they were a local branch, even if they're from upstream branches or forks. See which pull requests pass commit status checks, too!" />
         <GithubCenter
        //  chn
         img = {img3}
         paragraph = "Syntax highlighted diffs"
         text = "The new GitHub Desktop supports syntax highlighting when viewing diffs for a variety of different languages." />
        </div>
    )
}

export default CenterBuild
