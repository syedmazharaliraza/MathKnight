# Contribution Guidelines:

If you wish to contribute to this project, please raise an issue and wait for the project maintainers to approve it or give feedback before making a change.

This documentation contains a set of guidelines to help you during the contribution process. We are happy to welcome all the contributions from anyone willing to improve/add new scripts to this project. 

## Code of Conduct

Make sure to read it here: [CODE_OF_CONDUCT.md]()


## Preliminaries

- Download and install the latest stable version of [Git](https://git-scm.com/downloads) for version control
- Create a [Github](https://github.com/join) Account
- Download and install latest stable version of [VS Code](https://code.visualstudio.com/download)

##   A. Setting up the Project

**1.**  Fork [this](https://github.com/syedmazharaliraza/MathKnight/) repository.

**2.**  Clone your forked copy of the project.

```
git clone -https://github.com/<your_user_name>/MathKnight.git
```

**3.** Navigate to the project directory :file_folder: .

```
cd MathKnight
```

**4.** Add a reference to the original repository.

```
git remote add upstream https://github.com/syedmazharaliraza/MathKnight/ 
```

**5.** Check the remotes for this repository.

```
git remote -v
```

**6.** Always take a pull from the upstream repository to your master branch to keep it at par with the main project(updated repository).

```
git pull upstream main
```

- Comment on any existing [issue(s)](https://github.com/syedmazharaliraza/MathKnight/issues) raised by **project maintainers**. Otherwise raise a [new issue](https://github.com/syedmazharaliraza/MathKnight/issues/new).

> ### Guidelines for raising a new issue:
>
> - Each issue should have an appropriate and short title like "Bug in Experience Page"
>
> - Be specific about your intended changes/suggestions
>
> - Attach a screenshot/clip if applicable
>
> - Please be patient enough. The project maintainers/mentors would review it as per their schedule. Refrain from putting up comments like "Please check this" ,"Please review this PR" etc.
>
##  B. Contributing to the Project

**1.** Create a new branch (DO NOT name it MAIN or MASTER or anything random).

```
git checkout -b <your_branch_name>
```

**2.** Perfom your desired changes to the code base.
- Make sure that you do not change any code unrelated to the task that you have been assigned

- Ensure that your changes apply to all screensizes

- Comment any new code addition(s)

- Do not mess up the directory structure

- Preview your changes and test them properly before proceding ahead

- Make a small clip or take screenshots before and after making changes.


**3.** Track your changes:heavy_check_mark: 

```
git add . 
```

**4.** Commit your changes .

```
git commit -m "Relevant message"  (usually title of the pull request)
```
- **Make sure to condense your changes into a single commit**.

**5.** Push the committed changes in your feature branch to your remote repo.

```
git push -u origin <your_branch_name>
```

**6.** To create a pull request, click on `compare and pull requests`. Please ensure you compare your feature branch to the desired branch of the repo you are suppose to make a PR to.


**7.** Then add an appropriate title and description to your pull request that explains your changes and efforts done.


**8.** Click on `Create Pull Request`.

> ### Guidelines for raising a pull request:
>
> - Each pull request should have an appropriate and short title like "Fixed Bug in Experience Page"
>
> - In case of multiple commits, please perform a rebase and make a squash commit before giving the pull request.
>
> - Pull Requests without a description would often not be reviewed. Make sure you describe your intended changes in the description section of the pull request. (Use bullet points and phrases)
>
> - Make sure to refer the respective issue in the respective PR using phrases like `Resolves #issue_number` or `Closes #issue_number`.  
>
Here's an example to raise a PR:
```
 Fixes #640

# Work Done:

- Fixed Responsiveness bug
- Made the Favicon more optimized
- ...
- ...
- ...

# Relevant Screenshots/Gifs
```

> - Refrain from using phrases like "Hi, I am ..", "Please merge me this PR", "Thank You..", etc. We are only interested in technical parts.
>
> - Attach a screenshot/clip of the change(s).
>
> - Please be patient enough. The project maintainers/mentors would review it as per their schedule. Please do not start putting comments like "Please check this" etc.
>
> - Not every PR would be merged directly. In majority of the scenarios, we would be offering some additional suggestions which are to be incorporated in the same PR with a squash commit.
>
> - Look out for possible merge conflicts. Please add comments required, this makes your code readable.
>
>- Make sensible variable names.
>
> - Although we support feedback from everyone in all phases of development, it is highly advised not to put any negative comments in other participant's pull requests.
>
> - Always keep a note of the deadline.


**9.** Voila :exclamation: You have made a PR to the awesome-developer-portfolio project :boom: . Sit back patiently and relax while the project maintainers review your PR. Please understand at times the time can vary from a few hours to a few days.


