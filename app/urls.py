from . import views
from django.urls import path


urlpatterns = [
    path('', views.api_endpoints, name='home')
]