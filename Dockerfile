FROM node
WORKDIR /application
COPY package.json .
COPY package-lock.json .
ENV DATABASE_URL=postgresql://postgres:T8uapFPmb2g2HTQg@db.xdkiehxkkfqylvvqympp.supabase.co:5432/postgres
ENV SECRET=secret
RUN npm ci
COPY . .
EXPOSE 3000
CMD [ "node", "app.js"]