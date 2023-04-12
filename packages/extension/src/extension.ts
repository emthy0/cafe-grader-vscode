// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import vscode = require("vscode")
import Sidebar = require("./panels/SidebarProvider")

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "ez-cafe-grader" is now active fsdafasf!'
  )

  // Register the Sidebar Panel
  const sidebarProvider = new Sidebar.SidebarProvider(context.extensionUri)
  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider(
      "ez-cafe-grader-sidebar",
      sidebarProvider
    )
  )
  context.subscriptions.push(
    vscode.commands.registerCommand("ez-cafe-grader.askquestion", async () => {
      let response = await vscode.window.showInformationMessage(
        "How are you doing?",
        "Good",
        "Bad"
      )
      if (response === "Bad") {
        vscode.window.showInformationMessage("I'm sorry")
      }
    })
  )

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    "ez-cafe-grader.helloWorld",
    () => {
      // The code you place here will be executed every time your command is executed
      // Display a message box to the user
      // PrimaryPanel.render()
      vscode.window.showInformationMessage("Hello World from ez-grader!")
    }
  )

  context.subscriptions.push(disposable)
}

// This method is called when your extension is deactivated
function deactivate() {}

export = {
  activate,
  deactivate,
}
