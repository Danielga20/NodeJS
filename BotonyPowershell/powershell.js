const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const {exec} = require('child_process')

app.use(express.static(__dirname + '/public'))

app.use(bodyParser.urlencoded({ extended: false }))

app.post('/Script', (req, res) => {
  let num1 = req.body.numero1
  let num2 = req.body.numero2
 let num3 = req.body.numero3
  let num4 = req.body.numero4
   let num5 = req.body.numero5
  if (num1) {

	exec('Get-process | convertTo-Html', {'shell':'powershell.exe'}, (error, stdout, stderr)=>
	{res.send(stdout);})	

  }
  else if(num2){

	exec('Get-WmiObject Win32_Service | Select Name | convertTo-Html', {'shell':'powershell.exe'}, (error, stdout, stderr)=>
 	{res.send(stdout);})

  }
  else if(num3){

	exec('Get-LocalUser | convertTo-Html', {'shell':'powershell.exe'}, (error, stdout, stderr)=>
 	{res.send(stdout);})

  }
   else if(num4){

	exec('Get-Printer | convertTo-Html', {'shell':'powershell.exe'}, (error, stdout, stderr)=>
 	{res.send(stdout);})

  }
  else if(num5){

	exec('Get-DnsClientCache | convertTo-Html', {'shell':'powershell.exe'}, (error, stdout, stderr)=>
 	{res.send(stdout);})

  }
})

var server = app.listen(8888, () => {
  console.log('Servidor web iniciado')
})
