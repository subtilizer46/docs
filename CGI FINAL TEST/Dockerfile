FROM python:3.9-slim
WORKDIR /app
COPY . /app
RUN pip install --trusted-host pypi.python.org -r requirements.txt
EXPOSE 5000
ENV NAME DockerFlask
CMD ["python", "app.py"]