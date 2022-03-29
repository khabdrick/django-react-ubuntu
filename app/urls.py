from . import views
from django.urls import path


urlpatterns = [
    path('', views.api_endpoints, name='home'),
    path('create/', views.create_contact, name='create-items'),
    path('list/', views.ContactList.as_view(), name='view-contacts'),
    path('<int:pk>/', views.ContactDetail.as_view(), name= 'contacts-details'),
    path('update/<int:pk>/', views.UpdateContact.as_view(), name='update-contacts'),
    path('<int:pk>/delete/', views.delete_contact, name='delete-contact'),

]