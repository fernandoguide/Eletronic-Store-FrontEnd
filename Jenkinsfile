pipeline {

    agent any
    stages {
        stage('Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
               sh 'npm run-script build'           
            }
        }
        stage('Deploy  AWS EC2') {
            steps {
                sh 'rm -rf /usr/share/nginx/html/*'
                sh 'rm -rf node_modules/'
                sh 'cp -r /var/lib/jenkins/workspace/eletronic-store-front/build/*  /usr/share/nginx/html/'
                echo "Deployed react app"
            }
        }
        
    }
}