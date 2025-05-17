pipeline {
    agent any

    environment {
        NODE_OPTIONS = '--openssl-legacy-provider' // Fix for Node.js v17+ crypto issue
    }

    stages {
        stage('Clone Repo') {
            steps {
                git url: 'https://github.com/Akshayansg24/Dev.git', credentialsId: 'jenkins'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Deploy Locally') {
            steps {
                bat 'deploy.bat'
            }
        }
    }
}
