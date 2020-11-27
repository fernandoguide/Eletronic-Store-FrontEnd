FROM ianlancaster/node-vim-nginx
# Remove the default nginx index.html
RUN rm -rf /var/www/html/*
# Copy the contents of the dist directory over to the nginx web root
COPY /build/* /var/www/html/
# Expose the public http port
EXPOSE 80
# Start server
CMD ["nginx", "-g", "daemon off;"]
