FROM python:3.12.3-slim

WORKDIR /app

COPY ./requirements.txt /app/requirements.txt

RUN pip3 install --no-cache-dir --upgrade -r requirements.txt

COPY ./src /app/src

EXPOSE 3000

WORKDIR /app/src

CMD [ "fastapi", "run", "main.py", "--port", "3000" ]